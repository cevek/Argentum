/// <reference path="Array.ts"/>

interface Iterable<T> {
    [index:number]: T;
    length: number;
}
interface Object {
    observe(beingObserved:Object, callback:(update:Object) => void) : void;
}
interface Function {
    displayName:string;
}

interface Console {
    profileEnd(name:string):void;
    trace(name?:string):void;
    group(...params:any[]):void;
    groupCollapsed(...params:any[]):void;
}

interface AtomListenerCallback<T, A1, A2, A3> {
    (value:any, arg1?:A1, arg2?:A2, arg3?:A3): void;
}
interface AtomListeners<T, A1, A2, A3> {
    callback: AtomListenerCallback<T, A1, A2, A3>;
    arg1: A1;
    arg2: A2;
    arg3: A3;
    atom: Atom<T>;
    firstValue: T;
    thisArg: Object;
}

interface IAtomGetter<T> {
    (prevValue:T): T;
}
interface IAtom<T> {
    getter?: IAtomGetter<T>;
    value?: T;
    name?: string;
    masters?: Atom<Object>[];
    slaves?: Atom<Object>[];
}

enum NeedUpdate{
    SET = <any>'set',
    GETTER = <any>'getter',
    NOT = <any>'not'
}

class Atom<T> {
    static debugMode = true;
    protected static lastId = 0;
    protected id = 0;
    protected name = '';
    value:T;
    protected getter:(prevValue:T)=>T;
    protected removed:boolean;

    owner:any = null;

    /* static source<T>(owner:any, value?:T, params:IAtom<T> = {}):Atom<T> {
         params.value = value;
         return new Atom(owner, null, params);
     }
 */
    protected masters:AtomMap<Atom<Object>> = null;
    protected slaves:AtomMap<Atom<Object>> = null;
    listeners:AtomListeners<T, Object, Object, Object>[] = [];
    protected needUpdate = NeedUpdate.NOT;
    protected mastersCount = 0;

    constructor(value?:T) {
        this.value = value;
        this.name = arguments[3];
    }

    protected createNamedInstance() {
        return this;
        if (Atom.debugMode) {
            var obj = Object.create(Atom.prototype);
            var keys = Object.keys(this);
            for (var i = 0; i < keys.length; i++) {
                var key = keys[i];
                obj[key] = (<any>this)[key];
            }
            obj.constructor = function () {};
            obj.constructor.displayName = name;
            return obj;
        }
    }

    static createIfNot<T>(owner:any, val:Atom<T>):Atom<T>;
    static createIfNot<T>(owner:any, val:T):Atom<T>;
    static createIfNot<T>(owner:any, val:any):Atom<T> {
        if (val instanceof Atom) {
            return val;
        }
        return new Atom(val);
    }

    get fullname() {
        return this.name;
        /*if (this.owner) {
            if (this.name && this.name.indexOf('.') === -1) {
                this.name = Atom.makeName(this.owner, this.name);
            }
            if (!this.name) {
                var keys = Object.keys(this.owner);
                for (var i = 0; i < keys.length; i++) {
                    var key = keys[i];
                    if (this.owner[key] === this) {
                        this.name = Atom.makeName(this.owner, key);
                    }
                }
                if (!this.name) {
                    this.name = Atom.makeName(this.owner, 'noname');
                    console.error("atom hasn't name", this);
                }
            }
        }
        else {
            this.name = 'noname';
            //console.error("atom hasn't name", this);
        }

        return this.name;*/
    }

    protected valueOf():T {
        return this.get();
    }

    protected toJSON() {
        return '<Atom>';
    }

    addMaster(masterAtom:Atom<Object>) {
        if (!masterAtom.slaves) {
            masterAtom.slaves = new AtomMap<Atom<Object>>();
        }
        if (!this.masters) {
            this.masters = new AtomMap<Atom<Object>>();
        }
        masterAtom.slaves.set(this.id, this);
        this.masters.set(masterAtom.id, masterAtom);
        return this;
    }

    clearMasters() {
        if (this.masters) {
            var masters = Atom.getAtomMapValues(this.masters);
            for (var i = 0; i < masters.length; i++) {
                masters[i].slaves.delete(this.id);
            }
            this.masters.clear();
        }
    }

    touch() {
        var slaveAtom = Atom.lastCalledGetter;
        if (slaveAtom && slaveAtom.id !== this.id) {
            if (!this.slaves) {
                this.slaves = new AtomMap<Atom<Object>>();
            }
            if (!slaveAtom.masters) {
                slaveAtom.masters = new AtomMap<Atom<Object>>();
            }
            this.slaves.set(slaveAtom.id, slaveAtom);
            slaveAtom.masters.set(this.id, this);
        }
    }

    get(index?:number):T {
        if (this.value === void 0 && this.getter) {
            if (this.getter) {
                var temp = Atom.lastCalledGetter;
                Atom.lastCalledGetter = this;
                this.clearMasters();
                this.value = this.getter.call(this.owner, this.value);
                Atom.lastCalledGetter = temp;
            }
        }
        this.touch();
        return this.value;
    }

    static depth = -1;
    protected static checked:{[id:number]: Atom<any>} = {};

    protected compare(a:any, b:any) {
        return a === b;
    }

    protected update() {
        Atom.depth++;
        var updated = false;
        if (this.needUpdate === NeedUpdate.SET) {
            updated = true;
        }
        if (this.needUpdate === NeedUpdate.GETTER && this.getter) {
            var temp = Atom.lastCalledGetter;
            Atom.lastCalledGetter = this;
            this.clearMasters();
            var old_value = this.value;
            this.value = this.getter.call(this.owner, this.value);
            updated = !this.compare(old_value, this.value);
            Atom.lastCalledGetter = temp;
        }
        this.callListeners();
        if (Atom.debugMode) {
            //console.log(Atom.depthSpaces(Atom.depth) + "update", this.needUpdate, this.fullname);
            if (updated) {
                console.groupCollapsed(Atom.depthSpaces(Atom.depth) + this.fullname);
                console.log(this);
                console.log(this.value);
                console.trace();
                console.groupEnd();
            }
        }

        if (this.slaves) {
            var slaves = Atom.getAtomMapValues(this.slaves);
            for (var j = 0; j < slaves.length; j++) {
                var slave = slaves[j];
                if (updated && slave.needUpdate === NeedUpdate.NOT) {
                    slave.needUpdate = NeedUpdate.GETTER;
                }
                slave.mastersCount--;
                console.assert(slave.mastersCount >= 0, 'Negative mastersCount', slave.mastersCount, slave);
                if (slave.mastersCount === 0) {
                    slave.update();
                    if (Atom.debugMode) {
                        slave.update.displayName = slave.fullname + '.atom';
                    }
                }
            }
        }
        this.needUpdate = NeedUpdate.NOT;
        Atom.depth--;
    }

    protected updateSlaveMastersCount(parent?:Atom<any>) {
        if (Atom.checked[this.id]) {
            console.error(this);
            throw new Error("cyclic atom");
        }
        Atom.checked[this.id] = parent;
        if (this.slaves) {
            var slaves = Atom.getAtomMapValues(this.slaves);
            for (var j = 0; j < slaves.length; j++) {
                var slave = slaves[j];
                slave.mastersCount++;
                if (slave.mastersCount === 1) {
                    slave.updateSlaveMastersCount(this);
                }
            }
        }
    }

    static ondigest = window.addEventListener('message', Atom.digest);
    static willDigests = false;

    static digest(e?:{data: string}) {
        if (e && e.data !== 'digest') {
            return;
        }
        var keys = Object.keys(Atom.setAtoms);
        if (keys.length === 0) {
            return;
        }
        var atoms:Atom<any>[] = [];
        for (var i = 0; i < keys.length; i++) {
            if (Atom.setAtoms[+keys[i]]) {
                atoms.push(Atom.setAtoms[+keys[i]]);
            }
        }
        Atom.setAtoms = {};
        Atom.checked = {};
        Atom.willDigests = false;
        if (Atom.debugMode) {
            console.groupCollapsed("digest");
            console.log(atoms);
            console.trace();
            console.groupEnd();
        }

        for (var i = 0; i < atoms.length; i++) {
            var atom = atoms[i];
            atom.updateSlaveMastersCount(<any>'digest');
        }

        for (var i = 0; i < atoms.length; i++) {
            var atom = atoms[i];
            if (Atom.debugMode) {
                atom.update.displayName = atom.fullname + '.atom';
            }
            atom.needUpdate = NeedUpdate.SET;
            if (!atom.removed) {
                atom.update();
            }
        }
        Atom.digest();
    }

    static setAtoms:{[id: number]: Atom<any>} = {};

    set(val:T, force = false) {
        if (this.value !== val || force) {
            this.value = val;
            this.needUpdate = NeedUpdate.SET;
            Atom.setAtoms[this.id] = this;
            if (!Atom.willDigests) {
                postMessage('digest', '*');
                Atom.willDigests = true;
            }
        }
    }

    setNull() {
        this.set(null);
    }

    isEqual(val:T) {
        return this.get() === val;
    }

    isEmpty() {
        var val = this.get();
        return val === void 0 || val === null;
    }

    protected callListeners() {
        if (this.listeners) {
            //Atom.debugMode && console.log(this.fullname + ".listeners");

            for (var i = 0; i < this.listeners.length; i++) {
                var listener = this.listeners[i];
                if (listener.firstValue !== this.value) {
                    // console.log(this, "listener callback");
                    listener.callback.call(listener.thisArg, this.value, listener.arg1, listener.arg2, listener.arg3);
                }
                listener.firstValue = <T>Atom.firstValueObj;
            }
        }
    }

    addListener<A1, A2, A3>(fn:AtomListenerCallback<T, A1, A2, A3>,
                            thisArg:any/*checked*/,
                            arg1?:A1,
                            arg2?:A2,
                            arg3?:A3) {
        if (!this.listeners) {
            this.listeners = [];
        }
        if (this.listeners.every(listener => !(listener.callback === fn && listener.thisArg === thisArg))) {
            var listener = {
                callback: fn,
                arg1: arg1,
                arg2: arg2,
                arg3: arg3,
                firstValue: this.value,
                atom: this,
                thisArg: thisArg
            };
            this.listeners.push(listener);
        }
        return this;
    }

    removeListener(fn:AtomListenerCallback<T, Object, Object, Object>, thisArg:any/*checked*/) {
        for (var i = 0; i < this.listeners.length; i++) {
            var listener = this.listeners[i];
            if (listener.callback === fn && listener.thisArg === thisArg) {
                this.listeners.splice(i, 1);
                break;
            }
        }
        return this;
    }

    destroy() {
        if (this.masters) {
            var masters = Atom.getAtomMapValues(this.masters);
            for (var i = 0; i < masters.length; i++) {
                var master = masters[i];
                if (master && master.slaves) {
                    master.slaves.delete(this.id);
                }
            }
        }
        if (this.slaves) {
            var slaves = Atom.getAtomMapValues(this.slaves);
            for (var i = 0; i < slaves.length; i++) {
                var slave = slaves[i];
                if (slave && slave.masters) {
                    slave.masters.delete(this.id);
                }
            }
        }
        this.value = null;
        this.masters = null;
        this.slaves = null;
        this.owner = null;
        this.getter = null;
        this.removed = true;
        this.listeners = null;
    }

    /********************
     *   Statics
     *******************/

    protected static lastCalledGetter:Atom<Object>;
    protected static firstValueObj = {};

    protected static depthSpaces(depth:number) {
        var s = '';
        for (var i = 0; i < depth; i++) {
            s += '|  ';
        }
        return s;
    }

    /* protected static makeName(owner:any*/
    /*checked*/
    /*, name:string) {
            if (!owner) {
                return name;
            }
            var constr = owner.constructor;
            if (constr && typeof constr.ns == 'function') {
                constr.ns = constr.ns.toString().replace('function () { return ', '').replace('; }', '');
            }
            if (owner.ns) {
                if (typeof owner.ns == 'function') {
                    owner.ns = owner.ns.toString().replace('function () { return ', '').replace('; }', '');
                }
            }

            var ns = owner.ns || owner.fullname || (constr && constr.ns);

            var constrName = '';
            if (constr && constr.fullname && constr.fullname !== 'Function' && constr.fullname !== 'Object') {
                constrName = constr.fullname;
            }

            return (ns ? ns + '.' : '' ) + (constrName ? constrName + '.' : '') + name;
        }*/

    protected static getAtomMapValues<T>(map:AtomMap<T>) {
        var values:T[] = [];
        if (map.hash) {
            var keys = Object.keys(map.hash);
            for (var i = 0; i < keys.length; i++) {
                values[i] = map.hash[+keys[i]];
            }
        }
        else {
            var k = map.values();
            var v:{value: T; done: boolean};
            while ((v = k.next()) && !v.done) values.push(v.value);
        }
        return values;
    }

    static arrayIsEqual(a1:Iterable<Object>, a2:Iterable<Object>) {
        if (a1 === a2) {
            return true;
        }
        if (a1.length !== a2.length) {
            return false;
        }
        for (var i = 0; i < a1.length; i++) {
            if (a1[i] !== a2[i]) {
                return false;
            }
        }
        return true;
    }
}

class AtomFormula<T> extends Atom<T> {
    constructor(owner:any, getter:(prevValue:T)=>T, params?:IAtom<T>, name?:string) {
        if (!name) {
            console.error('Atom name is not define');
            //debugger;
        }
        this.name = name;

        this.id = ++Atom.lastId;
        this.owner = owner;
        if (owner) {
            owner.atoms = owner.atoms || [];
            owner.atoms.push(this);
        }

        if (getter) {
            this.getter = getter;
            this.getter.displayName = this.fullname + '.getter';
        }
        if (params) {
            //this.name = params.name;
            this.value = params.value === null ? void 0 : params.value;
            if (params.masters) {
                this.masters = new AtomMap<Atom<Object>>();
                for (var i = 0; i < params.masters.length; i++) {
                    var master = params.masters[i];
                    this.addMaster(master);
                }
            }
        }

        if (Atom.debugMode) {
            //todo: just copy function code
            //this.update = <()=>void>new Function('return ' + AtomFormula.prototype.update.toString())();
            //this.update.displayName = 'Atom.' + this.name;
        }



        super(this.value);
    }
}

class AtomMap<T> {
    hash:{[idx: number]: T} = {};

    get(key:number) {
        return this.hash[key];
    }

    set(key:number, value:T) {
        this.hash[key] = value;
    }

    delete(key:number) {
        delete this.hash[key];
    }

    clear() {
        this.hash = {};
    }

    values():{next: ()=>{value: T; done: boolean}} {
        return null;
    }

[idx: string]: any;
}

if (window && (<any>window).Map) {
    (<any>window).AtomMap = <any>Map;
}
/*
var a1 = new Atom(this, null, {value: 1});
var a2 = new Atom(this, null, {value: 2, masters: [a1]});
var a3 = new Atom(this, null, {value: 3, masters: [a2]});
var a9 = new Atom(this, null, {value: 9, masters: null});
var a5 = new Atom(this, null, {value: 5, masters: [a9]});
var a4 = new Atom(this, null, {value: 4, masters: [a1, a5]});
var a10 = new Atom(this, null, {value: 10, masters: [a9]});
var a6 = new Atom(this, null, {value: 6, masters: [a5, a10]});
var a7 = new Atom(this, null, {value: 7, masters: [a4, a6]});
var a8 = new Atom(this, null, {value: 8, masters: [a7]});
var a11 = new Atom(this, null, {value: 11, masters: [a10]});
var a12 = new Atom(this, null, {value: 12, masters: null});
var a13 = new Atom(this, null, {value: 13, masters: null});
var a14 = new Atom(this, null, {value: 14, masters: null});
var a15 = new Atom(this, null, {value: 15, masters: [a13, a14]});
var a16 = new Atom(this, null, {value: 16, masters: [a3, a4, a8, a11, a12, a15]});

a1.set(a1.value, true);
a9.set(a9.value, true);
a12.set(a12.value, true);
a13.set(a13.value, true);
a14.set(a14.value, true);*/
// run order 1,2,3,9,5,4,10,6,7,8,11,12,13,14,15,16
/*

var a100 = new Atom(this, null, {value: 100});
var a104 = new Atom(this, null, {value: 104});
var a105 = new Atom(this, null, {value: 105});
var a101 = new Atom(this, ()=>101, {value: 101, masters: [a104, a105]});
var a102 = new Atom(this, ()=>102, {value: 102, masters: [a100, a101]});
var a103 = new Atom(this, ()=>103, {value: 103, masters: [a102]});
//a100.addMaster(a103);

a100.set(a100.value, true);
a104.set(a104.value, true);
a105.set(a105.value, true);
//a101.set(a101.value, true);
*/
