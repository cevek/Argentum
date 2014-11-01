function Atomize(obj) {
    console.log("Atomize", obj);
    if (obj.props) {
        return;
    }

    var code = obj.toString();
    var regexp = /this.(\w+) = Att/g;
    var res = null;
    var props:any = {};
    obj.props = [];

    while (res = regexp.exec(code)) {
        void function (key) {
            var atomKey = key + '$';
            console.log(key);
            var atom = new Atomic();

            function setter(val) {
                if (val !== AttO) {
                    if (!this[atomKey]) {
                        this[atomKey] = new Atomic();
                    }
                    this[atomKey].value = val;
                }
                else {
                    this.$id = ++Atomic.counter;
                }

                /*if (!this.$id) {
                 this.$id = ++Atomic.counter;
                 //abc.atoms[this.$id] = new Atomic();
                 //abc.atoms[this.$id] = (new Atomic());
                 //;
                 }
                 else {
                 this[atomKey].value = val;
                 }*/
            }

            function getter() {
                if (!this[atomKey]) {
                    this[atomKey] = new Atomic();
                }
                return this[atomKey].value;
            }

            props[key] = {
                enumerable: true,
                configurable: false,
                get: getter,
                set: setter
            };

            obj.props.push(key);
        }(res[1])
    }

    Object.defineProperties(obj.prototype, props)
    return true;
}

var AttO = {};
function Att(val?:any):any {
    return AttO;
}

class AB {
    name:string = Att();
    firstName:string = Att();
    lastName:string = Att();
    a:string = Att();
    b:string = Att();
    c:string = Att();
    d:string = Att();
    e:string = Att();
    f:string = Att();
    g:string = Att();
    static atomized = Atomize(AB)

    constructor() {
        //Atomize(this)
    }
}

function test() {
    //console.profile('perf');
    console.time('perf');
    var a = new AB();
    for (var i = 0; i < 1000000; i++) {
        new AB();
        //a.name;
        //a.a;
    }
    console.timeEnd('perf');
    //console.profileEnd('perf');

}


test();

var ab1 = new AB();
var ab2 = new AB();
//ab1.firstName = '1';
//ab2.firstName = '2';