/// <reference path="Argentum.ts"/>
class A {
    static counter;
    complete = new ag.Atomic(0);

    constructor(val) {
        this.complete.set(val);
    }
}

var a = new ag.Atomic<A>(new A(1));
var fnAtom = new ag.Atomic(function () {
    a.get().complete.get();
});
console.dir(fnAtom);

a.set(new A(2));

console.dir(fnAtom);
