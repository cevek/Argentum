interface Object {
    observe(beingObserved:any, callback:(update:any) => any) : void;
}
interface Console {
    profileEnd(name:string):void;
}

interface AtomListeners<T> {
    callback: (atom:T, arg1?:any, arg2?:any, arg3?:any)=>void;
    arg1: any;
    arg2: any;
    arg3: any;
    firstValue: any;
}

class Atom <T> {
    private static lastId = 0;
    id:number;
    private _value:T;
    private _old_value:T;
    private getter:(prevValue: T)=>T;
    private setter:(atom:Atom<T>)=>void;
    private removed:boolean;
    public name:string;

    //constructor(getter?:(atom:Atom<T>)=>void, setter?:(atom:Atom<T>)=>T, val?:T);
    constructor(getter?:(prevValue: T)=>T, setter?:(atom:Atom<T>)=>void, val?:T, name?:string) {
        this.getter = getter;
        this.setter = setter;
        this.id = ++Atom.lastId;
        this.name = name;
        this._value = val === null ? void 0 : val;
        //this.set(val === null ? void 0 : val);
    }

    static lastCalled:Atom<any>;
    static firstValueObj = {};

    valueOf():T {
        return this.get();
    }

    toJSON() {
        return '<Atom>';
    }

    get():T {
        if (this._value === undefined && this.getter) {
            var temp = Atom.lastCalled;
            Atom.lastCalled = this;
            this._value = this.getter(this._value);
            Atom.lastCalled = temp;
        }

        var parentAtom = Atom.lastCalled;
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
            Atom.traverseMasters(parentAtom, 0);
        }

        return this._value;
    }

    set(val:T, force = false, sync = false) {
        if (this._value !== val || force) {
            this._value = val;
            if (sync) {
                this.microtaskUpdate(false, val);
                this.unsetComputing();
            }
            else {
                Atom.sendMicrotask(this, false, val);
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

    update() {
        Atom.sendMicrotask(this, true);
    }

    private microtaskUpdate(compute:boolean, value:T) {
        this.computing = true;
        this._value = compute && this.getter ? this.getter(this._value) : value;
        //if (this._old_value !== this._value) {
        this._update();
        //}
        this._old_value = this._value;
    }

    unsetComputing() {
        this.computing = false;
        this.setter && this.setter(this);

        for (var id in this.slaves) {
            if (this.slaves[id]) {
                this.slaves[id].unsetComputing();
                this.slaves[id].setter && this.slaves[id].setter(this.slaves[id]);
                //console.log(this.slaves[id].setter);
            }
        }
    }

    private _update() {
        var list = Object.keys(this.order).sort((a, b)=>this.order[Number(b)] - this.order[Number(a)]);
        for (var i = 0; i < list.length; i++) {
            var slave = this.slaves[Number(list[i])];
            if (slave && !slave.computing) {
                slave.computing = true;
                slave._value = slave.getter(slave);
                if (slave._old_value !== slave._value) {
                    slave._update();
                }
                slave._old_value = slave._value;
            }
        }
        if (this.listeners) {
            for (var i = 0; i < this.listeners.length; i++) {
                var listener = this.listeners[i];
                if (listener.firstValue !== this._value) {
                    console.log(this.name || this.id, "listener callback");

                    listener.callback(this._value, listener.arg1, listener.arg2, listener.arg3);
                }
                listener.firstValue =  Atom.firstValueObj;
            }
        }
    }

    static traverseMasters(atom:Atom<any>, depth:number) {
        var ndepth = depth + 1;
        for (var i in atom.masters) {
            var master = atom.masters[i];
            if (master && master.order[atom.id] < ndepth) {
                //console.log("traverse", master.id, ndepth);
                master.order[atom.id] = ndepth;
                Atom.traverseMasters(master, ndepth);
            }
        }
    }

    subscribesTo(atom:Atom<any>) {
        this.masters[atom.id] = atom;
        atom.slaves[this.id] = this;

        atom.order[this.id] = 0;
        Atom.traverseMasters(this, 0);

        return this;
    }

    addListener<R1, R2, R3>(fn:(val:T, arg1?:R1, arg2?:R2, arg3?:R3)=>void, arg1?:R1, arg2?:R2, arg3?:R3) {
        if (!this.listeners) {
            this.listeners = [];
        }
        //if (this.listeners.indexOf(fn) === -1) {
        this.listeners.push({callback: fn, arg1: arg1, arg2: arg2, arg3: arg3, firstValue: this._value});
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
        this._old_value = null;
        this._value = null;
        this.masters = null;
        this.order = null;
        this.slaves = null;
        this.listeners = null;
        this.removed = true;
    }

    /*
     setSlave(atom:Atom<any>) {
     this.slaves[atom.id] = atom;
     atom.masters[this.id] = this;
     return this;
     }
     */

    private computing:boolean = false;
    public slaves:{[id: number]:Atom<any>} = {};
    public masters:{[id: number]:Atom<any>} = {};
    private order:{[id: number]:number} = {};
    public listeners:AtomListeners<T>[] = [];

    private static microtasks:{atom: Atom<any>; compute: boolean; value: any}[] = [];
    private static lastMicrotaskId = 0;

    private static observer = {microtaskId: 0};

    static useObjectObserver = true;

    static sendMicrotask(atom:Atom<any>, compute:boolean, value:any = null) {
        //console.log("sendmicrotask", atom.id);
        var mid = ++Atom.lastMicrotaskId;
        Atom.microtasks.push({atom: atom, compute: compute, value: value});
        Atom.observer.microtaskId = mid;
        if (!Object.observe || !Atom.useObjectObserver) {
            window.postMessage({atomMicrotaskId: mid}, '*');
        }
    }

    static applyUpdates() {
        //console.log("message", event.data, Atom.microtasks);
        var doneAtoms:{[index: number]: boolean} = {};
        var mt = Atom.microtasks.slice();
        Atom.microtasks = [];
        for (var i = mt.length - 1; i >= 0; i--) {
            var microtask = mt[i];
            if (!doneAtoms[microtask.atom.id] && !microtask.atom.removed) {
                //console.log("do microtask", microtask, microtask.atom.id);
                microtask.atom.microtaskUpdate(microtask.compute, microtask.value);
                doneAtoms[microtask.atom.id] = true;
            }
        }

        for (var i = 0; i < mt.length; i++) {
            mt[i].atom.unsetComputing();
        }
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
        Object.observe(Atom.observer, () => {
            Atom.applyUpdates();
        });
    }
}

if (Object.observe && Atom.useObjectObserver) {
    Atom.listenMicrotaskObjectObserver();
}
else {
    Atom.listenMicrotaskPostMessage();
}

interface ArrayListener {
    callback: (array?:any, arg1?:any, arg2?:any, arg3?:any)=>void;
    arg1: any;
    arg2: any;
    arg3: any;
}
interface Array<T> {
    addListener<R1,R2,R3>(fn:(val?:T[], arg1?:R1, arg2?:R2, arg3?:R3)=>void, arg1?:R1, arg2?:R2, arg3?:R3):void;
    removeListener(fn:(val?:T[])=>void):void;
    __change():void;
    __push: any;
    __unshift: any;
    __pop: any;
    __shift: any;
    __sort: any;
    __splice: any;
    listeners: ArrayListener[];
}

Array.prototype.addListener = function (fn:any, arg1?:any, arg2?:any, arg3?:any) {
    this.listeners = this.listeners || [];
    //if (this.listeners.indexOf(fn) === -1) {
    this.listeners.push({callback: fn, arg1: arg1, arg2: arg2, arg3: arg3});
    //}
};
Array.prototype.removeListener = function (fn:any) {
    /*if (this.listeners) {
     var index = this.listeners.indexOf(fn);
     if (index > -1) {
     this.splice(index, 1);
     }
     }*/
};

var Array_actionChangeId = 0;
var Array_arrays:any[] = [];
Array.prototype.__change = function () {
    if (this.listeners && this.listeners.length) {
        if (Array_arrays.indexOf(this) === -1) {
            Array_arrays.push(this);
        }
        window.postMessage({arrayChangedActionId: ++Array_actionChangeId}, '*');
    }
};

window.addEventListener("message", function message(event:any) {
    var mid = event.data && event.data.arrayChangedActionId;
    if (mid == Array_actionChangeId) {
        //console.log("Array change message");

        for (var i = 0; i < Array_arrays.length; i++) {
            var listeners = Array_arrays[i].listeners;
            if (listeners) {
                for (var j = 0; j < listeners.length; j++) {
                    listeners[j].callback(Array_arrays[i], listeners[j].arg1, listeners[j].arg2, listeners[j].arg3);
                }
            }
        }
        Array_arrays = [];
    }
});

Array.prototype.__push = Array.prototype.push;
Array.prototype.push = function (item:any) {
    this.__change();
    return this.__push(item);
};

Array.prototype.__unshift = Array.prototype.unshift;
Array.prototype.unshift = function (item:any) {
    this.__change();
    return this.__unshift(item);
};

Array.prototype.__pop = Array.prototype.pop;
Array.prototype.pop = function () {
    this.__change();
    return this.__pop();
};

Array.prototype.__shift = Array.prototype.shift;
Array.prototype.shift = function () {
    this.__change();
    return this.__shift();
};

Array.prototype.__sort = Array.prototype.sort;
Array.prototype.sort = function (fn:any) {
    this.__change();
    return this.__sort(fn);
};

Array.prototype.__splice = Array.prototype.splice;
Array.prototype.splice = function (start:number, deleteCount?:number) {
    this.__change();
    /*
     if (deleteCount) {
     for (var i = start; i < start + deleteCount; i++) {
     }
     }
     */
    if (arguments.length > 2) {
        /*
         for (var i = start; i < start + arguments.length - 2; i++) {
         this.callListeners('added', this[i], i);
         }
         */
        return this.__splice.apply(this, arguments);
    }
    else {
        return this.__splice(start, deleteCount);
    }
};
/*

 function log(a:Atom<any>, val:any) {
 console.log("computed", a.id);
 return val;
 }

 var p1 = new Atom(a=>10101);
 var p2 = new Atom(a=>10102).subscribesTo(p1);

 var a3 = new Atom(a=>log(a, 1), a=> {
 setTimeout(()=> {
 console.log("server get request");
 a.set(1234);
 }, 1000)
 });
 var a4 = new Atom(a=>log(a, 2)).subscribesTo(a3);
 var a5 = new Atom(a=>log(a, 3)).subscribesTo(a3);
 var a6 = new Atom(a=>log(a, 4)).subscribesTo(a4);
 var a7 = new Atom<number>(a=> {
 setTimeout(()=> {
 console.log("server put request");
 }, 1000);
 }
 ).subscribesTo(a6).subscribesTo(a5).subscribesTo(a3).subscribesTo(p1);

 */
/*
 a1.setSlave(a2).setSlave(a3).setSlave(a5);
 a2.setSlave(a4).setSlave(a5);
 a3.setSlave(a5);
 a4.setSlave(a5);
 *//*


 //a1.set(2);
 */
/*a1.set(1);
 console.log("reinit");
 a1.set(2);
 a1.set(3);
 a1.set(4);
 a1.set(5);*//*

 a3.set(10);

 p1.set(1);

 console.time('perf');

 console.timeEnd('perf');





 */



