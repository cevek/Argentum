/// <reference path="Array.ts"/>

interface Object {
    observe(beingObserved:Object, callback:(update:Object) => void) : void;
}

interface Console {
    profileEnd(name:string):void;
    trace(name?:string):void;
}

interface Microtask {
    atom: Atom<Object>;
    value: Object;
    stack?: Atom<Object>;
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
    setter?: (atom:Atom<T>)=>void;
    value?: T;
    name?: string;
    masters?: Atom<Object>[];
    slaves?: Atom<Object>[];
}

class Atom<T> {
    static debugMode = true;
    private static lastId = 0;
    private id:number;
    private value:T;
    private getterFn:(prevValue:T)=>T;
    private setterFn:(atom:Atom<T>)=>void;
    private removed:boolean;
    private level:number = 0;
    private _name:string;
    private owner:any;

    static source<T>(owner:any, value?:T, params:IAtom<T> = {}):Atom<T> {
        params.value = value;
        return new Atom(owner, null, params);
    }

    private computing:boolean = false;
    private slaves:Atom.AtomMap<Atom<Object>>;
    private masters:Atom.AtomMap<Atom<Object>>;
    private listeners:AtomListeners<T, Object, Object, Object>[] = [];

    //constructor(getterFn?:(atom:Atom<T>)=>void, setterFn?:(atom:Atom<T>)=>T, val?:T);
    constructor(owner:any, getter?:(prevValue:T)=>T, params?:IAtom<T>) {
        this.id = ++Atom.lastId;
        this.owner = owner;
        if (owner) {
            owner.atoms = owner.atoms || [];
            owner.atoms.push(this);
        }

        this.getterFn = getter;
        if (params) {
            this._name = params.name;
            this.setterFn = params.setter;
            this.value = params.value === null ? void 0 : params.value;
            /*
             if (params.masters){
             this.masters = new Atom.AtomMap<Atom<Object>>();
             for (var i = 0; i < params.masters.length; i++) {
             var master = params.masters[i];
             this.addMaster(master);
             }
             }
             if (params.slaves){
             this.slaves = new Atom.AtomMap<Atom<Object>>();
             for (var i = 0; i < params.slaves.length; i++) {
             var slave = params.slaves[i];
             this.slaves.set(slave.id, slave);
             }
             }
             */
        }
    }

    /*    proxy(owner:any) {
     return new Atom<T>(owner, {
     getter: ()=>this.get(),
     setter: (atom)=> {
     this.set(atom.value)
     },
     name: this.name + 'Proxy'
     });
     }*/

    get name() {
        if (this.owner) {
            if (this._name && this._name.indexOf('.') === -1) {
                this._name = Atom.makeName(this.owner, this._name);
            }
            if (!this._name) {
                var keys = Object.keys(this.owner);
                for (var i = 0; i < keys.length; i++) {
                    var key = keys[i];
                    if (this.owner[key] === this) {
                        this._name = Atom.makeName(this.owner, key);
                    }
                }
                if (!this._name) {
                    this._name = Atom.makeName(this.owner, 'noname');
                    console.error("atom hasn't name", this);
                }
            }
        }
        else {
            this._name = 'noname';
            console.error("atom hasn't name", this);
        }
        return this._name;
    }

    private valueOf():T {
        return this.get();
    }

    private toJSON() {
        return '<Atom>';
    }

    addMaster(masterAtom:Atom<Object>) {
        if (!masterAtom.slaves) {
            masterAtom.slaves = new Atom.AtomMap<Atom<Object>>();
        }
        if (!this.masters) {
            this.masters = new Atom.AtomMap<Atom<Object>>();
        }
        masterAtom.slaves.set(this.id, this);
        this.masters.set(masterAtom.id, masterAtom);
        this.setLevelToMasters(this.level + 1);
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

    private callGetter() {
        if (this.getterFn) {
            var temp = Atom.lastCalledGetter;
            Atom.lastCalledGetter = this;
            this.clearMasters();
            if (this.computing) {
                console.log("cyclic atom", this);
                throw "cyclic error";
            }
            this.computing = true;
            //var old_value = this.value;
            this.value = this.getterFn.call(this.owner, this.value);
            this.computing = false;
            this.setLevelToMasters(this.level + 1);
            Atom.lastCalledGetter = temp;
            //return true;//old_value !== this.value;
        }
        //return true;
    }

    private callSetter() {
        if (this.setterFn) {
            var temp = Atom.lastCalledSetter;
            Atom.lastCalledSetter = this;
            this.setterFn(this);
            Atom.lastCalledSetter = temp;
        }
    }

    private setLevelToMasters(level:number) {
        if (this.masters) {
            var masters = Atom.getAtomMapValues(this.masters);
            for (var i = 0; i < masters.length; i++) {
                var master = masters[i];
                if (master.level < level) {
                    master.level = level;
                    master.setLevelToMasters(level + 1);
                }
            }
        }
    }

    get1():T {
        if (this.value === void 0) {
            this.callGetter();
        }
        return this.value;
    }

    get():T {
        if (this.value === void 0) {
            this.callGetter();
        }

        var slaveAtom = Atom.lastCalledGetter;
        if (slaveAtom) {
            if (!this.slaves) {
                this.slaves = new Atom.AtomMap<Atom<Object>>();
            }
            if (!slaveAtom.masters) {
                slaveAtom.masters = new Atom.AtomMap<Atom<Object>>();
            }
            this.slaves.set(slaveAtom.id, slaveAtom);
            slaveAtom.masters.set(this.id, this);
        }
        return this.value;
    }

    set(val:T, force = false) {
        if (this.value !== val || force) {
            this.value = val;
            var mid = ++Atom.lastMicrotaskId;
            Atom.microtasks.push({
                atom: this,
                value: val,
                stack: Atom.lastCalledSetter
            });
            Atom.observer.microtaskId = mid;
            if (!Object.observe || !Atom.useObjectObserver) {
                window.postMessage({atomMicrotaskId: mid}, '*');
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

    private debugInfo(depth:number) {
        if (this.owner !== ag && Atom.updated[this.id]) {
            var tt = typeof this.value;
            if (Atom.debugVisibled[this.id]) {
                console.log(Atom.depthSpaces(depth) + '' + this.name + ' ^');
            }
            else {
                if (tt == 'number' || (tt == 'object' && !this.value) || tt == 'undefined' || tt == 'string' || tt == 'boolean') {
                    console.groupCollapsed(Atom.depthSpaces(depth) + this.name + ' = ' + this.value);
                }
                else {
                    console.groupCollapsed(Atom.depthSpaces(depth) + this.name);
                    console.log(this.value);
                }
                console.dir(this);
                console.groupEnd();
                Atom.debugVisibled[this.id] = true;
                if (this.slaves) {
                    var slaves = Atom.getAtomMapValues(this.slaves);
                    for (var i = 0; i < slaves.length; i++) {
                        var slave = slaves[i];
                        slave.debugInfo(depth + 1);
                    }
                }
            }
        }
    }

    private callListeners() {
        if (this.listeners) {
            Atom.debugMode && console.log(this.name + ".listeners");

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
                            thisArg?:any/*checked*/,
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
            if (thisArg) {
                thisArg.listeners = thisArg.listeners || [];
                thisArg.listeners.push(listener);
            }
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
        this.getterFn = null;
        this.setterFn = null;
        this.removed = true;
        this.listeners = null;
    }

    /********************
     *   Statics
     *******************/

    private static lastCalledGetter:Atom<Object>;
    private static lastCalledSetter:Atom<Object>;
    private static firstValueObj = {};

    private static microtasks:Microtask[] = [];
    private static lastMicrotaskId = 0;

    private static observer = {microtaskId: 0};

    private static useObjectObserver = true;

    private static getTime() {
        var d = new Date();
        return ('0' + d.getHours()).substr(-2) + ':' + ('0' + d.getMinutes()).substr(-2) + ':' + ('0' + d.getSeconds()).substr(-2);
    }

    private static levels:{[idx: number]: Atom<Object>}[] = [];
    private static updated:{[idx: number]: boolean} = {};
    private static debugVisibled:{[idx: number]: boolean} = {};

    private allocateSlavesToLevels() {
        if (!Atom.levels[this.level]) {
            Atom.levels[this.level] = {};
        }
        Atom.levels[this.level][this.id] = this;
        if (this.slaves) {
            var slaves = Atom.getAtomMapValues(this.slaves);
            for (var i = 0; i < slaves.length; i++) {
                var slave = slaves[i];
                slave.allocateSlavesToLevels();
            }
        }
    }

    private static applyUpdates() {
        var setterAtom = Atom.microtasks[0] && Atom.microtasks[0].stack;
        if (Atom.debugMode) {
            if (setterAtom) {
                console.group(Atom.depthSpaces(1) + setterAtom.name + ".setter");
            }
            else {
                console.group("********** " + Atom.getTime() + " **********");
            }
            console.groupCollapsed("trace");
            console.trace('');
            console.groupEnd();
        }

        var mt = Atom.microtasks.slice();
        Atom.microtasks = [];
        Atom.levels = [];
        Atom.updated = {};
        Atom.debugVisibled = {};
        for (var i = 0; i < mt.length; i++) {
            var microtask = mt[i];
            microtask.atom.allocateSlavesToLevels();
            microtask.atom.callSetter();
            microtask.atom.callListeners();
            Atom.updated[microtask.atom.id] = true;
        }

        for (var i = Atom.levels.length - 1; i >= 0; i--) {
            if (Atom.levels[i]) {
                var keys = Object.keys(Atom.levels[i]);
                for (var j = 0; j < keys.length; j++) {
                    var atom = Atom.levels[i][+keys[j]];

                    if (atom.masters) {
                        var allMastersChanged = true;
                        var masters = Atom.getAtomMapValues(atom.masters);
                        for (var k = 0; k < masters.length; k++) {
                            var master = masters[k];
                            if (!Atom.updated[master.id]) {
                                allMastersChanged = false;
                                break;
                            }
                        }
                        if (allMastersChanged) {
                            Atom.updated[atom.id] = true;
                            atom.callGetter();
                            //todo: double call
                            atom.callListeners();
                        }
                    }
                }
            }
        }
        if (Atom.debugMode) {
            for (var i = 0; i < mt.length; i++) {
                var microtask = mt[i];
                microtask.atom.debugInfo(0);
            }
            console.groupEnd();
        }
    }

    private static listenMicrotaskPostMessage() {
        window.addEventListener("message", function message(event:{data: {atomMicrotaskId: number}}) {
            var mid = event.data && event.data.atomMicrotaskId;
            if (mid == Atom.lastMicrotaskId) {
                Atom.applyUpdates();
            }
        });
    }

    private static listenMicrotaskObjectObserver() {
        Object.observe(Atom.observer, Atom.applyUpdates);
    }

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

        var ns = owner.ns || owner.name || (constr && constr.ns);

        var constrName = '';
        if (constr && constr.name && constr.name !== 'Function' && constr.name !== 'Object') {
            constrName = constr.name;
        }

        return (ns ? ns + '.' : '' ) + (constrName ? constrName + '.' : '') + name;
    }

    private static getAtomMapKeys<T>(map:Atom.AtomMap<T>) {
        var keys:string[];
        if (map.hash) {
            keys = Object.keys(map.hash);
        }
        else {
            keys = [];
            var k = map.keys();
            var v:{value: string; done: boolean};
            while ((v = k.next()) && !v.done) keys.push(v.value);
        }
        return keys;
    }

    private static getAtomMapValues<T>(map:Atom.AtomMap<T>) {
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

    //noinspection JSUnusedLocalSymbols
    private static lister = Object.observe && Atom.useObjectObserver ?
        Atom.listenMicrotaskObjectObserver() : Atom.listenMicrotaskPostMessage();
}

module Atom {
    export class AtomMap<T> {
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

        keys():{next: ()=>{value: string; done: boolean}} {
            return null;
        }

    [idx: string]: any;
    }

    if (window && window['Map']) {
        Atom.AtomMap = <any>Map;
    }
}

