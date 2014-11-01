class Atomm<T> {
    valueOf():number {
        return null;
    }

    toString():string {
        return null;
    }
}

function observableSet<T>(val:T):T {return val};
var observable:any;

class Observable {
    private static observed;

    constructor() {
        if (!this.constructor['observed']) {
            var code = this.constructor.toString();
            var reg = /this.(\w+)\s*=\s*observable/g;
            var m;
            while (m = reg.exec(code)) {
                var key = m[1];
                console.log(key);
                var props:any = {
                    enumerable: true,
                    get: new Function("if (!this.$" + key + ") this.$" + key + " = new Atomic(); return this.$" + key + ".get()"),
                    set: new Function("val", "if (val === Atom) return; if (!this.$" + key + ") this.$" + key + " = new Atomic(); this.$" + key + ".value = val")
                }
                Object.defineProperty(this.constructor.prototype, key, props);
            }
        }
    }

    static getAtom(observable:any) {

    }
}

class Userr extends Observable {
    name:string = observable;
    firstName:string = observable;
    age:number = observableSet(234);
    checked:boolean = observableSet(false);
}

interface Number {
    listen();
}
interface String {
    listen();
}
interface Boolean {
    listen();
}

var usr = new Userr();
Observable.getAtom(()=>usr.firstName)



