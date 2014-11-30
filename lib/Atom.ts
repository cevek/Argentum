class Atom <T> {
    private static lasId = 0;
    id:number;
    private value:T;
    private onSet:(atom:Atom<T>)=>T;
    private onGet:(atom:Atom<T>)=>void;

    constructor(onSet?:(atom:Atom<T>)=>void, onGet?:(atom:Atom<T>)=>void, val?:T);
    constructor(onSet?:(atom:Atom<T>)=>T, onGet?:(atom:Atom<T>)=>void, val?:T) {
        this.onSet = onSet;
        this.onGet = onGet;
        this.id = ++Atom.lasId;
        this.value = val;
    }

    get val():T {
        if (this.value === undefined) {
            this.onGet && this.onGet(this);
        }
        return this.value;
    }

    set val(val:T) {
        this.value = val;
        Atom.sendMicrotask(this, false, val);
    }

    update() {
        Atom.sendMicrotask(this, true);
    }

    private microtaskUpdate(compute:boolean, value:T) {
        this.computing = true;
        this.value = compute ? this.onSet(this) : value;
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
                slave.value = slave.onSet(slave);
                slave._update();
            }
        }
        if (this.listeners) {
            for (var i = 0; i < this.listeners.length; i++) {
                this.listeners[i](this.value);
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



