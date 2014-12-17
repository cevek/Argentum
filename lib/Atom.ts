/// <reference path="Atom.ts"/>
/// <reference path="Array.ts"/>

interface Object {
    observe(beingObserved:any, callback:(update:any) => any) : void;
}
interface Console {
    profileEnd(name:string):void;
    trace(name?:string):void;
}

interface Microtask {
    atom: Atom<any>;
    value: any;
    stack?: any;
}

interface AtomListeners<T> {
    callback: (atom:T, arg1?:any, arg2?:any, arg3?:any)=>void;
    arg1: any;
    arg2: any;
    arg3: any;
    firstValue: any;
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
    public name:string;
    private owner:any;

    private computing:boolean = false;
    private slaves:Atom.AtomMap<Atom<any>>;
    private masters:Atom.AtomMap<Atom<any>>;
    private order:Atom.AtomMap<number>;
    private listeners:AtomListeners<T>[] = [];

    //constructor(getter?:(atom:Atom<T>)=>void, setter?:(atom:Atom<T>)=>T, val?:T);
    constructor(owner:any, obj:IAtom<T>) {
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

    valueOf():T {
        return this.get();
    }

    toJSON() {
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

    private reGetter() {
        if (this.getter) {
            var temp = Atom.lastCalledGetter;
            Atom.lastCalledGetter = this;
            this.clearMasters();
            this.value = this.getter(this.value);
            Atom.lastCalledGetter = temp;
        }
    }

    get():T {
        if (this.value === void 0) {
            this.reGetter();
        }

        var slaveAtom = Atom.lastCalledGetter;
        if (slaveAtom) {
            if (!this.slaves) {
                this.slaves = new Atom.AtomMap<Atom<any>>();
            }

            this.slaves.set(slaveAtom.id, slaveAtom);
            if (!slaveAtom.masters) {
                slaveAtom.masters = new Atom.AtomMap<Atom<any>>();
            }

            slaveAtom.masters.set(this.id, this);

            if (!this.order) {
                this.order = new Atom.AtomMap<number>();
            }

            this.order.set(slaveAtom.id, 0);
            Atom.traverseMasters(slaveAtom, 0);
        }

        return this.value;
    }

    set(val:T, force = false, sync = false) {
        if (this.value !== val || force) {
            this.value = val;
            if (sync) {
                //this.microtaskUpdate(false, val);
                //this.unsetComputing();
            }
            else {

                /*                if (Atom.lastCalledSetter) {
                 this.stack = Atom.lastCalledSetter.stack.slice();
                 this.stack.push(this);
                 }
                 else {
                 this.stack = [];
                 }*/

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
    }

    setNull() {
        this.set(null);
    }

    isEqual(val:T) {
        return this.get() === val;
    }

    isEmpty() {
        var val:any = this.get();
        return !val || val.length === 0;
    }

    private unsetComputing() {
        this.computing = false;

        var temp = Atom.lastCalledSetter;
        Atom.lastCalledSetter = this;
        this.setter && this.setter(this);
        Atom.lastCalledSetter = temp;

        if (this.slaves) {
            var slaves = Atom.getAtomMapValues(this.slaves);
            for (var i = 0; i < slaves.length; i++) {
                var slave = slaves[i];
                if (slave) {
                    slave.unsetComputing();

                    var temp = Atom.lastCalledSetter;
                    Atom.lastCalledSetter = slave;
                    slave.setter && slave.setter(slave);
                    Atom.lastCalledSetter = temp;
                }
            }
        }
    }

    private update(depth:number) {
        if (Atom.debugMode && this.owner !== Arg) {
            var tt = typeof this.value;
            if (tt == 'number' || (tt == 'object' && !this.value) || tt == 'undefined' || tt == 'string' || tt == 'boolean') {
                console.groupCollapsed(Atom.depthSpaces(depth) + this.name + ' = ' + this.value);
            }
            else {
                console.groupCollapsed(Atom.depthSpaces(depth) + this.name);
                console.log(this.value);
            }
            console.dir(this);
            console.groupCollapsed("trace");
            console.trace('');
            console.groupEnd();
            console.groupEnd();
        }

        if (this.order) {
            //TODO: get outside closure
            var list = Atom.getAtomMapKeys(this.order).sort((a, b)=>this.order.get(b) - this.order.get(a));
            for (var i = 0; i < list.length; i++) {
                var slave = this.slaves.get(list[i]);
                if (slave && !slave.computing) {
                    slave.computing = true;
                    slave.reGetter();
                    if (slave.old_value !== slave.value) {
                        slave.update(depth + 1);
                    }
                    slave.old_value = slave.value;
                }
            }
        }
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
                    master.order.delete(this.id);
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
        this.order = null;
        this.slaves = null;
        this.listeners = null;
        this.removed = true;
    }

    /********************
     *   Statics
     *******************/

    private static lastCalledGetter:Atom<any>;
    private static lastCalledSetter:Atom<any>;
    private static firstValueObj = {};

    private static traverseMasters(atom:Atom<any>, depth:number) {
        var ndepth = depth + 1;
        if (atom.masters) {
            var masters = Atom.getAtomMapValues(atom.masters);
            for (var i = 0; i < masters.length; i++) {
                var master = masters[i];
                if (master && master.order.get(atom.id) < ndepth) {
                    master.order.set(atom.id, ndepth);
                    Atom.traverseMasters(master, ndepth);
                }
            }
        }
    }

    private static microtasks:Microtask[] = [];
    private static lastMicrotaskId = 0;

    private static observer = {microtaskId: 0};

    private static useObjectObserver = true;

    private static getTime() {
        var d = new Date();
        return ('0' + d.getHours()).substr(-2) + ':' + ('0' + d.getMinutes()).substr(-2) + ':' + ('0' + d.getSeconds()).substr(-2);
    }

    private static applyUpdates() {
        var setterAtom = Atom.microtasks[0] && Atom.microtasks[0].stack;
        if (Atom.debugMode) {
            if (setterAtom) {
                console.group(Atom.depthSpaces(1) + setterAtom.name + ".setter");
            }
            else {
                console.group("Atom updates[" + Atom.getTime() + "]");
            }
        }

        //console.log("message", event.data, Atom.microtasks);
        var doneAtoms:{[index: number]: boolean} = {};
        var mt = Atom.microtasks.slice();
        Atom.microtasks = [];
        for (var i = mt.length - 1; i >= 0; i--) {
            var microtask = mt[i];
            var atom = microtask.atom;
            if (!doneAtoms[atom.id] && !atom.removed) {
                atom.computing = true;
                atom.value = microtask.value;
                atom.update(setterAtom ? 1 : 0);
                atom.old_value = atom.value;
                doneAtoms[microtask.atom.id] = true;
            }
        }

        for (var i = 0; i < mt.length; i++) {
            mt[i].atom.unsetComputing();
        }
        Atom.debugMode && console.groupEnd();
    }

    private static listenMicrotaskPostMessage() {
        window.addEventListener("message", function message(event:any) {
            var mid = event.data && event.data.atomMicrotaskId;
            if (mid == Atom.lastMicrotaskId) {
                Atom.applyUpdates();
            }
        });
    }

    static listenMicrotaskObjectObserver() {
        Object.observe(Atom.observer, Atom.applyUpdates);
    }

    private static depthSpaces(depth:number) {
        var s = '';
        for (var i = 0; i < depth; i++) {
            s += '  ';
        }
        return s;
    }

    private static makeName(owner:any, name:string) {
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
        var keys:number[];
        if (map.hash) {
            keys = <any>Object.keys(map.hash);
        }
        else {
            keys = [];
            var k = map.keys();
            var v:{value: T; done: boolean};
            while ((v = k.next()) && !v.done) keys.push(+v.value);
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

        keys():{next: ()=>{value: T; done: boolean}} {
            return null;
        }

    [idx: string]: any;
    }

    if (window && window['Map']) {
        Atom.AtomMap = <any>Map;
    }
}

