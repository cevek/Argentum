"use strict"
class Atomic <T> {
    value:T;

    constructor(obj?, key?) {

    }

    get() {
        return this.value;
    }

    set(val:T) {
        this.value = val;
    }
}


function ab(obj, key) {
    if (!obj[key])
        obj[key] = new Atomic();
    return obj[key].value;
}

var Atom:any = function (val):any {
    return val;
};

class A {
    /* a = new Atomic<string>();
     b = new Atomic<string>();
     c = new Atomic<string>();
     d = new Atomic<string>();
     e = new Atomic<string>();
     f = new Atomic<string>();
     g = new Atomic<string>();
     */

    //get a() {return this.$a || (this.$a = new Atomic<string>())}
    a:string = Atom('Hello');
    static atomized = Atomizer(A);
}

function Atomizer(fn) {
    var code = fn.toString();
    var reg = /this.(\w+) = Atom/g;
    var m;
    while (m = reg.exec(code)) {
        var key = m[1];
        console.log(key);
        var props:any = {
            enumerable: true,
            get: new Function("if (!this.$" + key + ") this.$" + key + " = new Atomic(); return this.$" + key + ".get()"),
            set: new Function("val", "if (val === Atom) return; if (!this.$" + key + ") this.$" + key + " = new Atomic(); this.$" + key + ".value = val")
        }
        Object.defineProperty(fn.prototype, key, props);
    }
}
/*var props:any = {
 get: new Function("if (!this.$a) this.$a = new Atomic(); return this.$a.get()"),
 set: new Function("val", "if (val === Atom) return; if (!this.$a) this.$a = new Atomic(); this.$a.value = val")
 }
 Object.defineProperty(A.prototype, 'a', props)*/

var p = [];
function test() {
    console.time('perf');
    var a = new A();
    for (var i = 0; i < 1000000; i++) {
        p[i] = new A();
        //p[i] = new B();
        //a.a;
    }
    //a.d.set('123');
    console.timeEnd('perf');

}

var a = new A();
var b = new A();
/*
a.a = '1';
b.a = '2';
*/
console.log(a.a, b.a);
test();


