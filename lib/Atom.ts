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
    compute: boolean;
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
    id:number;
    public value:T;
    public old_value:T;
    public getter:(prevValue:T)=>T;
    public setter:(atom:Atom<T>)=>void;
    public removed:boolean;
    public name:string;
    public owner:any;

    public computing:boolean = false;
    public slaves:Atom.AtomMap<Atom<any>>;
    public masters:Atom.AtomMap<Atom<any>>;
    public order:Atom.AtomMap<number>;
    public listeners:AtomListeners<T>[] = [];
    public stack:Atom<any>[] = [];

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

    get():T {
        if (this.value === undefined && this.getter) {
            var temp = Atom.lastCalledGetter;
            Atom.lastCalledGetter = this;
            this.value = this.getter(this.value);
            Atom.lastCalledGetter = temp;
        }

        var parentAtom = Atom.lastCalledGetter;
        if (parentAtom) {
            if (!this.slaves) {
                this.slaves = new Atom.AtomMap<Atom<any>>();
            }

            this.slaves.set(parentAtom.id, parentAtom);
            if (!parentAtom.masters) {
                parentAtom.masters = new Atom.AtomMap<Atom<any>>();
            }

            parentAtom.masters.set(this.id, this);

            if (!this.order) {
                this.order = new Atom.AtomMap<number>();
            }

            this.order.set(parentAtom.id, 0);
            Atom.traverseMasters(parentAtom, 0);
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
                    compute: false,
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

    unsetComputing() {
        this.computing = false;

        var temp = Atom.lastCalledSetter;
        Atom.lastCalledSetter = this;
        this.setter && this.setter(this);
        Atom.lastCalledSetter = temp;

        if (this.slaves) {
            this.slaves.forEach(this.unsetAtomAndRunSetter, this);
        }
    }

    unsetAtomAndRunSetter(slave:Atom<any>) {
        if (slave) {
            slave.unsetComputing();

            var temp = Atom.lastCalledSetter;
            Atom.lastCalledSetter = slave;
            slave.setter && slave.setter(slave);
            Atom.lastCalledSetter = temp;
        }
    }

    microtaskUpdate(compute:boolean, value:T) {
        this.computing = true;
        this.value = compute && this.getter ? this.getter(this.value) : value;
        //if (this.old_value !== this.value) {
        this.update(0);
        //}
        this.old_value = this.value;
    }

    update(depth:number) {
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
                    slave.value = slave.getter(slave);
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

    private destroyMaster(master:Atom<any>) {
        if (master && master.slaves) {
            master.slaves.delete(this.id);
            master.order.delete(this.id);
        }
    }

    private destroySlave(slave:Atom<any>) {
        if (slave && slave.masters) {
            slave.masters.delete(this.id);
        }
    }

    destroy() {
        if (this.masters) {
            this.masters.forEach(this.destroyMaster, this);
        }
        if (this.slaves) {
            this.slaves.forEach(this.destroySlave, this);
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

    static lastCalledGetter:Atom<any>;
    static lastCalledSetter:Atom<any>;
    static firstValueObj = {};

    static traverseMasters(atom:Atom<any>, depth:number) {
        var ndepth = depth + 1;
        if (atom.masters) {
            //TODO: get outside closure
            atom.masters.forEach((master)=> {
                if (master && master.order.get(atom.id) < ndepth) {
                    //console.log("traverse", master.id, ndepth);
                    master.order.set(atom.id, ndepth);
                    Atom.traverseMasters(master, ndepth);
                }
            });
        }
    }

    static microtasks:Microtask[] = [];
    static lastMicrotaskId = 0;

    static observer = {microtaskId: 0};

    static useObjectObserver = true;

    static getTime() {
        var d = new Date();
        return ('0' + d.getHours()).substr(-2) + ':' + ('0' + d.getMinutes()).substr(-2) + ':' + ('0' + d.getSeconds()).substr(-2);
    }

    static applyUpdates() {
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
                //microtask.atom.microtaskUpdate(microtask.compute, microtask.value);

                atom.computing = true;
                atom.value = microtask.compute && atom.getter ? atom.getter(atom.value) : microtask.value;
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

    static listenMicrotaskPostMessage() {
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

    static depthSpaces(depth:number) {
        var s = '';
        for (var i = 0; i < depth; i++) {
            s += '  ';
        }
        return s;
    }

    static makeName(owner:any, name:string) {
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

        var fullName = (ns ? ns + '.' : '' ) + (constrName ? constrName + '.' : '') + name;
        return fullName;
    }

    static getAtomMapKeys(map:any) {
        var keys:number[];
        if (map.hash) {
            keys = <any>Object.keys(map.hash);
        }
        else {
            keys = [];
            var k = map.keys();
            var v:any;
            while ((v = k.next()) && !v.done) keys.push(v.value);
        }
        return keys;
    }

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

        forEach(fn:(val:T, key:number)=>any, thisArg?:any) {
            for (var key in this.hash) {
                if (thisArg) {
                    fn.call(thisArg, this.hash[key], key);
                } else {
                    fn(this.hash[key], key);
                }
            }
        }
    }

    if (window && window['Map']) {
        Atom.AtomMap = <any>Map;
    }
}

if (Object.observe && Atom.useObjectObserver) {
    Atom.listenMicrotaskObjectObserver();
}
else {
    Atom.listenMicrotaskPostMessage();
}