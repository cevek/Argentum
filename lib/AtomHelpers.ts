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
class AtomHelpers {
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
                    AtomHelpers.traverseMasters(master, ndepth);
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
        if (Atom.debugMode) {
            var isStack = AtomHelpers.microtasks[0] && AtomHelpers.microtasks[0].stack;
            if (isStack) {
                console.groupCollapsed("  Stack updates");
            }
            else {
                console.groupCollapsed("Atom updates[" + AtomHelpers.getTime() + "]");
            }
        }

        //console.log("message", event.data, Atom.microtasks);
        var doneAtoms:{[index: number]: boolean} = {};
        var mt = AtomHelpers.microtasks.slice();
        AtomHelpers.microtasks = [];
        for (var i = mt.length - 1; i >= 0; i--) {
            var microtask = mt[i];
            var atom = microtask.atom;
            if (!doneAtoms[atom.id] && !atom.removed) {
                //microtask.atom.microtaskUpdate(microtask.compute, microtask.value);

                atom.computing = true;
                atom.value = microtask.compute && atom.getter ? atom.getter(atom.value) : microtask.value;
                atom.update(0);
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
            if (mid == AtomHelpers.lastMicrotaskId) {
                AtomHelpers.applyUpdates();
            }
        });
    }

    static listenMicrotaskObjectObserver() {
        Object.observe(AtomHelpers.observer, AtomHelpers.applyUpdates);
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
}

module AtomHelpers {
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
    export function getAtomMapKeys(map:any) {
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

    if (window && window['Map']) {
        AtomHelpers.AtomMap = <any>Map;
    }
}

if (Object.observe && AtomHelpers.useObjectObserver) {
    AtomHelpers.listenMicrotaskObjectObserver();
}
else {
    AtomHelpers.listenMicrotaskPostMessage();
}
/*

 var getDescr = Object.getOwnPropertyDescriptor;
 Object.getOwnPropertyDescriptor = function (o, p) {
 var data = getDescr(o, p);
 if (o[p] && o[p] instanceof Atom) {
 var atom = o[p];
 if (atom.owner) {
 var owner:any = atom.owner;
 var constr = atom.owner.constructor;
 var ns = constr.ns;
 if (typeof constr.ns == 'function') {
 ns = constr.ns.toString().replace('function () { return ', '').replace('; }', '');
 }
 if (owner.ns) {
 if (typeof owner.ns == 'function') {
 ns = owner.ns.toString().replace('function () { return ', '').replace('; }', '');
 }
 }

 var atomPropName = atom.name;
 var name = (ns ? ns : constr.name ) + "." + atomPropName;
 var fn = eval("var Atom = {'" + name + "': function (){}}; Atom['" + name + "']");
 var obj = new fn;
 obj.original = atom;
 Object.keys(atom).forEach(key=>obj[key] = atom[key]);

 data.value = obj;
 }
 }
 return data;
 };
 */
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



