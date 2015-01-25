/// <reference path="Array.ts"/>

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
    (value:T, arg1?:A1, arg2?:A2, arg3?:A3): void;
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
    private static lastId = 0;
    private id = 0;
    private name = '';
    value:T;
    private getter:(prevValue:T)=>T;
    private removed:boolean;

    owner:any = null;

    static source<T>(owner:any, value?:T, params:IAtom<T> = {}):Atom<T> {
        params.value = value;
        return new Atom(owner, null, params);
    }

    private masters:AtomMap<Atom<Object>> = null;
    private slaves:AtomMap<Atom<Object>> = null;
    listeners:AtomListeners<T, Object, Object, Object>[] = [];
    private needUpdate = NeedUpdate.NOT;

    constructor(owner:any, getter?:(prevValue:T)=>T, params?:IAtom<T>) {
        this.id = ++Atom.lastId;
        this.owner = owner;
        if (owner) {
            owner.atoms = owner.atoms || [];
            owner.atoms.push(this);
        }

        if (getter) {
            this.getter = getter;
        }
        if (params) {
            this.name = params.name;
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
            this.update = <()=>void>new Function('return ' + Atom.prototype.update.toString());
        }
    }

    static createIfNot<T>(owner:any, val:Atom<T>):Atom<T>;
    static createIfNot<T>(owner:any, val:T):Atom<T>;
    static createIfNot<T>(owner:any, val:any):Atom<T> {
        if (val instanceof Atom) {
            return val;
        }
        return new Atom(owner, null, {value: val});
    }

    get fullname() {
        if (this.owner) {
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

        return this.name;
    }

    private valueOf():T {
        return this.get();
    }

    private toJSON() {
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

    get():T {
        if (this.value === void 0 && this.getter) {
            if (this.getter) {
                var temp = Atom.lastCalledGetter;
                Atom.lastCalledGetter = this;
                this.clearMasters();
                this.value = this.getter.call(this.owner, this.value);
                Atom.lastCalledGetter = temp;
            }
        }
        var slaveAtom = Atom.lastCalledGetter;
        if (slaveAtom) {
            if (!this.slaves) {
                this.slaves = new AtomMap<Atom<Object>>();
            }
            if (!slaveAtom.masters) {
                slaveAtom.masters = new AtomMap<Atom<Object>>();
            }
            this.slaves.set(slaveAtom.id, slaveAtom);
            slaveAtom.masters.set(this.id, this);
        }
        return this.value;
    }

    static depth = -1;

    update() {
        Atom.depth++;

        var updated = false;
        if (this.needUpdate === NeedUpdate.SET) {
            updated = true;
        }
        if (this.needUpdate === NeedUpdate.GETTER && this.getter) {
            if (Atom.debugMode) {
                this.getter.displayName = this.fullname + '.getter';
            }
            var temp = Atom.lastCalledGetter;
            Atom.lastCalledGetter = this;
            this.clearMasters();
            var old_value = this.value;
            this.value = this.getter.call(this.owner, this.value);
            updated = old_value !== this.value;
            Atom.lastCalledGetter = temp;
        }

        this.callListeners();
        if (Atom.debugMode) {
            console.log(Atom.depthSpaces(Atom.depth) + "update", this.needUpdate, this.fullname);
            if (updated) {
                console.groupCollapsed(Atom.depthSpaces(Atom.depth) + "update", this.fullname);
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
        Atom.depth--;
    }

    private static checked:{[id:number]: boolean} = {};

    private updateSlaveMastersCount() {
        if (Atom.checked[this.id]) {
            console.error(this);
            throw new Error("cyclic atom");
        }
        Atom.checked[this.id] = true;
        if (this.slaves) {
            var slaves = Atom.getAtomMapValues(this.slaves);
            for (var j = 0; j < slaves.length; j++) {
                var slave = slaves[j];
                slave.mastersCount++;
                if (slave.mastersCount === 1) {
                    slave.updateSlaveMastersCount();
                }
            }
        }
    }

    mastersCount = 0;

    static digest(e:{data: string}) {
        if (e.data === 'digest') {
            var atoms = Atom.setAtoms.slice();
            Atom.setAtoms = [];
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
                atom.updateSlaveMastersCount();
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
        }

    }

    static ondigest = window.addEventListener('message', Atom.digest);
    static willDigests = false;
    static setAtoms:Atom<any>[] = [];

    set(val:T, force = false) {
        if (this.value !== val || force) {
            this.value = val;
            this.needUpdate = NeedUpdate.SET;
            Atom.setAtoms.push(this);
            if (!Atom.willDigests) {
                postMessage('digest', '*');
            }
            Atom.willDigests = true;
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

    private callListeners() {
        if (this.listeners) {
            Atom.debugMode && console.log(this.fullname + ".listeners");

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

    /* addListener2(owner: any, callback: (val: T)=>void){
     var atom = new Atom(owner, {getter: ()=>{ callback.call(owner, this.get()); return null; }*/
    /*, masters: [this]*/
    /*, name: this.name + '.listener'});
     atom.get();
     return this;
     }*/

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

    private static lastCalledGetter:Atom<Object>;
    private static firstValueObj = {};

    private static depthSpaces(depth:number) {
        var s = '';
        for (var i = 0; i < depth; i++) {
            s += '|  ';
        }
        return s;
    }

    private static makeName(owner:any/*checked*/, name:string) {
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
    }

    private static getAtomMapValues<T>(map:AtomMap<T>) {
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

    static arrayIsEqual(a1:Object[], a2:Object[]) {
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
