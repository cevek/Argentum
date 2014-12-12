/// <reference path="AtomHelpers.ts"/>
/// <reference path="Array.ts"/>

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
    private value:T;
    private old_value:T;
    private getter:(prevValue:T)=>T;
    private setter:(atom:Atom<T>)=>void;
    public removed:boolean;
    public name:string;
    public owner:any;

    private computing:boolean = false;
    public slaves:{[id: number]:Atom<any>} = {};
    public masters:{[id: number]:Atom<any>} = {};
    public order:{[id: number]:number} = {};
    public listeners:AtomListeners<T>[] = [];
    public stack:Atom<any>[] = [];

    //constructor(getter?:(atom:Atom<T>)=>void, setter?:(atom:Atom<T>)=>T, val?:T);
    constructor(owner:any, obj:IAtom<T>) {
        this.id = ++Atom.lastId;
        this.owner = owner;

        if (obj) {
            this.getter = obj.getter;
            this.setter = obj.setter;
            this.name = AtomHelpers.makeName(owner, obj.name);
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
            var temp = AtomHelpers.lastCalledGetter;
            AtomHelpers.lastCalledGetter = this;
            this.value = this.getter(this.value);
            AtomHelpers.lastCalledGetter = temp;
        }

        var parentAtom = AtomHelpers.lastCalledGetter;
        if (parentAtom) {
            if (!this.slaves) {
                this.slaves = {};
            }

            this.slaves[parentAtom.id] = parentAtom;
            if (!parentAtom.masters) {
                parentAtom.masters = {};
            }

            parentAtom.masters[this.id] = this;

            this.order[parentAtom.id] = 0;
            AtomHelpers.traverseMasters(parentAtom, 0);
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
/*
                if (AtomHelpers.lastCalledSetter) {
                    this.stack = AtomHelpers.lastCalledSetter.stack.slice();
                    this.stack.push(this);
                }
                else {
                    this.stack = [];
                }
*/
                AtomHelpers.sendMicrotask(this, false, val);
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

    microtaskUpdate(compute:boolean, value:T) {
        this.computing = true;
        this.value = compute && this.getter ? this.getter(this.value) : value;
        //if (this.old_value !== this.value) {
        this._update();
        //}
        this.old_value = this.value;
    }

    unsetComputing() {
        this.computing = false;

        var temp = AtomHelpers.lastCalledSetter;
        AtomHelpers.lastCalledSetter = this;
        this.setter && this.setter(this);
        AtomHelpers.lastCalledSetter = temp;

        for (var id in this.slaves) {
            if (this.slaves[id]) {
                this.slaves[id].unsetComputing();
                var temp = AtomHelpers.lastCalledSetter;
                AtomHelpers.lastCalledSetter = this.slaves[id];
                this.slaves[id].setter && this.slaves[id].setter(this.slaves[id]);
                AtomHelpers.lastCalledSetter = temp;
            }
        }
    }

    private _update() {
        if (Atom.debugMode) {
            var tt = typeof this.value;
            var isPrimitive = false;
            if (tt == 'number' || (tt == 'object' && !this.value) || tt == 'undefined' || tt == 'string' || tt == 'boolean') {
                isPrimitive = true;
                console.groupCollapsed(this.name + ' = ' + this.value);
            }
            else {
                console.groupCollapsed(this.name);
                console.log(this.value);
            }
            console.dir(this);
        }

        var list = Object.keys(this.order).sort((a, b)=>this.order[Number(b)] - this.order[Number(a)]);
        for (var i = 0; i < list.length; i++) {
            var slave = this.slaves[Number(list[i])];
            if (slave && !slave.computing) {
                slave.computing = true;
                slave.value = slave.getter(slave);
                if (slave.old_value !== slave.value) {
                    slave._update();
                }
                slave.old_value = slave.value;
            }
        }
        if (this.listeners) {
            for (var i = 0; i < this.listeners.length; i++) {
                var listener = this.listeners[i];
                if (listener.firstValue !== this.value) {
                    // console.log(this, "listener callback");

                    listener.callback(this.value, listener.arg1, listener.arg2, listener.arg3);
                }
                listener.firstValue = AtomHelpers.firstValueObj;
            }
        }
        Atom.debugMode && console.groupEnd();
    }

    addListener<R1, R2, R3>(fn:(val:T, arg1?:R1, arg2?:R2, arg3?:R3)=>void, arg1?:R1, arg2?:R2, arg3?:R3) {
        if (!this.listeners) {
            this.listeners = [];
        }
        //if (this.listeners.indexOf(fn) === -1) {
        this.listeners.push({callback: fn, arg1: arg1, arg2: arg2, arg3: arg3, firstValue: this.value});
        //}
    }

    destroy() {
        for (var i in this.masters) {
            var master = this.masters[i];
            if (master && master.slaves) {
                delete master.slaves[this.id];
                delete master.order[this.id];
            }
        }
        for (var i in this.slaves) {
            var slave = this.slaves[i];
            if (slave && slave.masters) {
                delete slave.masters[this.id];
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
}