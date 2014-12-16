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
    public value:T;
    public old_value:T;
    public getter:(prevValue:T)=>T;
    public setter:(atom:Atom<T>)=>void;
    public removed:boolean;
    public name:string;
    public owner:any;

    public computing:boolean = false;
    public slaves:AtomHelpers.AtomMap<Atom<any>>;
    public masters:AtomHelpers.AtomMap<Atom<any>>;
    public order:AtomHelpers.AtomMap<number>;
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
                this.slaves = new AtomHelpers.AtomMap<Atom<any>>();
            }

            this.slaves.set(parentAtom.id, parentAtom);
            if (!parentAtom.masters) {
                parentAtom.masters = new AtomHelpers.AtomMap<Atom<any>>();
            }

            parentAtom.masters.set(this.id, this);

            if (!this.order) {
                this.order = new AtomHelpers.AtomMap<number>();
            }

            this.order.set(parentAtom.id, 0);
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

                /*                if (AtomHelpers.lastCalledSetter) {
                 this.stack = AtomHelpers.lastCalledSetter.stack.slice();
                 this.stack.push(this);
                 }
                 else {
                 this.stack = [];
                 }*/

                var mid = ++AtomHelpers.lastMicrotaskId;
                AtomHelpers.microtasks.push({
                    atom: this,
                    compute: false,
                    value: val,
                    stack: AtomHelpers.lastCalledSetter
                });
                AtomHelpers.observer.microtaskId = mid;
                if (!Object.observe || !AtomHelpers.useObjectObserver) {
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

        var temp = AtomHelpers.lastCalledSetter;
        AtomHelpers.lastCalledSetter = this;
        this.setter && this.setter(this);
        AtomHelpers.lastCalledSetter = temp;

        if (this.slaves) {
            this.slaves.forEach(this.unsetAtomAndRunSetter, this);
        }
    }

    unsetAtomAndRunSetter(slave:Atom<any>) {
        if (slave) {
            slave.unsetComputing();

            var temp = AtomHelpers.lastCalledSetter;
            AtomHelpers.lastCalledSetter = slave;
            slave.setter && slave.setter(slave);
            AtomHelpers.lastCalledSetter = temp;
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
                console.groupCollapsed(AtomHelpers.depthSpaces(depth) + this.name + ' = ' + this.value);
            }
            else {
                console.groupCollapsed(AtomHelpers.depthSpaces(depth) + this.name);
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
            var list = AtomHelpers.getAtomMapKeys(this.order).sort((a, b)=>this.order.get(b) - this.order.get(a));
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
                listener.firstValue = AtomHelpers.firstValueObj;
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
}