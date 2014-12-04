class Atom <T> {
    private static lastId = 0;
    id:number;
    private _value:T;
    private getter:(atom:Atom<T>)=>T;
    private setter:(atom:Atom<T>)=>T;

    constructor(getter?:(atom:Atom<T>)=>void, setter?:(atom:Atom<T>)=>T, val?:T);
    constructor(getter?:(atom:Atom<T>)=>T, setter?:(atom:Atom<T>)=>T, val?:T) {
        this.getter = getter;
        this.setter = setter;
        this.id = ++Atom.lastId;
        this._value = val;
    }

    static lastCalled:Atom<any>;

    valueOf():T {
        return this.get();
    }

    get():T {
        if (this._value === undefined && this.getter) {
            var temp = Atom.lastCalled;
            Atom.lastCalled = this;
            this._value = this.getter(this);
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

    set(val:T) {
        if (this._value !== val) {
            this._value = val;
            Atom.sendMicrotask(this, false, val);
        }
    }

    isEqual(val:T) {
        return this.get() === val;
    }

    update() {
        Atom.sendMicrotask(this, true);
    }

    private microtaskUpdate(compute:boolean, value:T) {
        this.computing = true;
        this._value = compute ? this.getter(this) : value;
        this._update();
    }

    unsetComputing() {
        this.computing = false;
        for (var id in this.slaves) {
            this.slaves[id].unsetComputing();
        }
    }

    private _update() {
        var list = Object.keys(this.order).sort((a, b)=>this.order[Number(b)] - this.order[Number(a)]);
        for (var i = 0; i < list.length; i++) {
            var slave = this.slaves[Number(list[i])];
            if (!slave.computing) {
                slave.computing = true;
                slave._value = slave.getter(slave);
                slave._update();
            }
        }
        if (this.listeners) {
            for (var i = 0; i < this.listeners.length; i++) {
                this.listeners[i](this._value);
            }
        }
    }

    static traverseMasters(atom:Atom<any>, depth:number) {
        var ndepth = depth + 1;
        for (var i in atom.masters) {

            var master = atom.masters[i];
            if (master.order[atom.id] < ndepth) {
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

    addListener(fn:(val:T)=>void) {
        this.listeners.push(fn);
    }

    /*
     setSlave(atom:Atom<any>) {
     this.slaves[atom.id] = atom;
     atom.masters[this.id] = this;
     return this;
     }
     */

    private computing:boolean = false;
    private slaves:{[id: number]:Atom<any>} = {};
    private masters:{[id: number]:Atom<any>} = {};
    private order:{[id: number]:number} = {};
    private listeners:{(val:T):void}[] = [];

    private static microtasks:{atom: Atom<any>; compute: boolean; value: any}[] = [];
    private static lastMicrotaskId = 0;

    static sendMicrotask(atom:Atom<any>, compute:boolean, value:any = null) {
        //console.log("sendmicrotask", atom.id);
        var mid = ++Atom.lastMicrotaskId;
        Atom.microtasks.push({atom: atom, compute: compute, value: value});
        window.postMessage({atomMicrotaskId: mid}, '*');
    }

    static listenMicrotask() {
        window.addEventListener("message", function message(event:any) {
            var mid = event.data && event.data.atomMicrotaskId;
            if (mid == Atom.lastMicrotaskId) {
                //console.log("message", event.data, Atom.microtasks);
                var doneAtoms:{[index: number]: boolean} = {};
                for (var i = Atom.microtasks.length - 1; i >= 0; i--) {
                    var microtask = Atom.microtasks[i];
                    if (!doneAtoms[microtask.atom.id]) {
                        //console.log("do microtask", microtask, microtask.atom.id);
                        microtask.atom.microtaskUpdate(microtask.compute, microtask.value);
                        doneAtoms[microtask.atom.id] = true;
                    }
                }

                for (var i = Atom.microtasks.length - 1; i >= 0; i--) {
                    Atom.microtasks[i].atom.unsetComputing();
                }

                Atom.microtasks = [];
                //Atom.lastMicrotaskId = 0;
            }
        });
    }
}

Atom.listenMicrotask();

interface Array<T> {
    addListener(fn:()=>void):void;
    removeListener(fn:()=>void):void;
    __change():void;
    __push: any;
    __unshift: any;
    __pop: any;
    __shift: any;
    __sort: any;
    __splice: any;
    listeners: {():void}[];
}

Array.prototype.addListener = function (fn:any) {
    this.listeners = this.listeners || [];
    this.listeners.push(fn);
};
Array.prototype.removeListener = function (fn:any) {
    if (this.listeners) {
        var index = this.listeners.indexOf(fn);
        if (index > -1) {
            this.splice(index, 1);
        }
    }
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
            for (var j = 0; j < listeners.length; j++) {
                listeners[j]();
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



