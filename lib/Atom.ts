/// <reference path="Atom.ts"/>
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

interface AtomListeners<T> {
    callback: (atom:T, arg1?:Object, arg2?:Object, arg3?:Object)=>void;
    arg1: Object;
    arg2: Object;
    arg3: Object;
    firstValue: Object;
}

interface IAtom<T> {
    getter?: (prevValue:T)=>T;
    setter?: (atom:Atom<T>)=>void;
    value?: T;
    name: string;
}

class Atom<T> {
    static debugMode = true;
    private static lastId = 0;
    private id:number;
    private value:T;
    private old_value:T;
    private getter:(prevValue:T)=>T;
    private setter:(atom:Atom<T>)=>void;
    private removed:boolean;
    private level:number = 0;
    public name:string;
    private owner:Object;

    private computing:boolean = false;
    private slaves:Atom.AtomMap<Atom<Object>>;
    private masters:Atom.AtomMap<Atom<Object>>;
    private listeners:AtomListeners<T>[] = [];

    //constructor(getter?:(atom:Atom<T>)=>void, setter?:(atom:Atom<T>)=>T, val?:T);
    constructor(owner:Object, obj:IAtom<T>) {
        this.id = ++Atom.lastId;
        this.owner = owner;

        if (obj) {
            this.getter = obj.getter;
            this.setter = obj.setter;
            this.name = Atom.makeName(owner, obj.name);
            this.value = obj.value === null ? void 0 : obj.value;
        }
        //this.set(val === null ? void 0 : val);
    }

    private valueOf():T {
        return this.get();
    }

    private toJSON() {
        return '<Atom>';
    }

    private clearMasters() {
        if (this.masters) {
            var masters = Atom.getAtomMapValues(this.masters);
            for (var i = 0; i < masters.length; i++) {
                masters[i].slaves.delete(this.id);
            }
            this.masters.clear();
        }
    }

    private callGetter() {
        if (this.getter) {
            var temp = Atom.lastCalledGetter;
            Atom.lastCalledGetter = this;
            this.clearMasters();
            if (this.computing) {
                console.log("cyclic atom", this);
                throw "cyclic error";
            }
            this.computing = true;
            var old_value = this.value;
            this.value = this.getter(this.value);
            this.computing = false;
            this.setLevelToMasters(this.level + 1);
            Atom.lastCalledGetter = temp;
            return old_value !== this.value;
        }
        return true;
    }

    private callSetter() {
        if (this.setter) {
            var temp = Atom.lastCalledSetter;
            Atom.lastCalledSetter = this;
            this.setter(this);
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

    set(val:T, force = false, sync = false) {
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
        var val:any/*checked*/ = this.get();
        return !val || val.length === 0;
    }

    private static debugVisibled:{[idx: number]: boolean} = {};

    private debugInfo(depth:number) {
        if (this.owner !== Arg && Atom.updated[this.id]) {
            var tt = typeof this.value;
            if (Atom.debugVisibled[this.id]) {
                console.log(Atom.depthSpaces(depth) + ''+this.name + ' ^');
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
            for (var i = 0; i < this.listeners.length; i++) {
                var listener = this.listeners[i];
                if (listener.firstValue !== this.value) {
                    // console.log(this, "listener callback");

                    listener.callback(this.value, listener.arg1, listener.arg2, listener.arg3);
                }
                listener.firstValue = Atom.firstValueObj;
            }
        }
    }

    //TODO: callback thisArg?
    addListener<R1, R2, R3>(fn:(val:T, arg1?:R1, arg2?:R2, arg3?:R3)=>void, arg1?:R1, arg2?:R2, arg3?:R3) {
        if (!this.listeners) {
            this.listeners = [];
        }
        //if (this.listeners.indexOf(fn) === -1) {
        this.listeners.push({callback: fn, arg1: arg1, arg2: arg2, arg3: arg3, firstValue: this.value});
        //}
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
        this.old_value = null;
        this.value = null;
        this.masters = null;
        this.slaves = null;
        this.listeners = null;
        this.removed = true;
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
        for (var i = 0; i < mt.length; i++) {
            var microtask = mt[i];
            microtask.atom.allocateSlavesToLevels();
        }
        for (var i = Atom.levels.length - 1; i >= 0; i--) {
            if (Atom.levels[i]) {
                var keys = Object.keys(Atom.levels[i]);
                for (var j = 0; j < keys.length; j++) {
                    var atom = Atom.levels[i][+keys[j]];
                    Atom.updated[atom.id] = atom.callGetter();
                    atom.callListeners();
                    atom.callSetter();
                }
            }
        }
        if (Atom.debugMode) {
            console.log(Atom.updated);

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

