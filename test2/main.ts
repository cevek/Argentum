interface Function {
    displayName:string;
}

interface BoxListener {
    ():void;
}
class Box<T> {
    constructor(private value:T, private owner?:any, private name?:string) {
        if (!owner || !name) {
            throw "owner or name is not defined";
        }
    }

    listen(listener:BoxListener) {
        this.owner.listeners__ = this.owner.listeners__ || [];
        this.owner.listeners__.push({callback: listener, name: this.name});
    }
}

class Folder {
    id:number;
    title:string;
    color:string;
}

class Task {
    id:number;
    title:string;

    constructor() {

    }

    parentFolders:Folder[];
}

class Collection<T> {

}

var a = new Task;

new Box(a.title).listen(()=> {
    console.log("title changed");
});

var Tasks = new Collection<Task>();

function __observableGet(value:any, owner:Object, name:string, symbol:number) {
    return value;
}

var __observableMessages:{[index: number]: {owner: any; name: string; oldValue: any;}} = {};
function __observableSet(oldValue:any, owner:Object, name:string, symbol:number, newValue:any) {
    /*if (__observableMessages.length === 0) {
        postMessage('digestbox', '*');
    }*/
    return newValue;
}
__observableSet.displayName = 'setter';
function digest(e:{data: string}) {
    /*
        if (!e || e.data === 'digestbox') {
            var messages = __observableMessages.slice();
            __observableMessages = [];
            for (var i = 0; i < messages.length; i++) {
                var message = messages[i];
                var listeners = message.owner.listeners__;
                if (listeners) {
                    var newVal = message.owner[message.name];
                    if (message.oldValue !== newVal) {
                        for (var j = 0; j < listeners.length; j++) {
                            var listener = listeners[j];
                            if (listener.name === message.name) {
                                listener.callback(newVal);
                            }
                        }
                    }
                }

            }
        }
    */
}
window.addEventListener('message', digest);

class B {
    //@observable
    title1 = '123';
    //@observable
    title2 = '123';
    //@observable
    title3 = '123';
    //@observable
    title4 = '123';
    //@observable
    title5 = '123';
    //@observable
    title6 = '123';
    //@observable
    title7 = '123';
    //@observable
    title8 = '123';
    //@observable
    title9 = '123';
    //@observable
    title0 = '123';
}

var ff:any = function() {
    this.title1 = null;
    this.title2 = null;
    this.title3 = null;
    this.title4 = null;
    this.title5 = null;
    this.title6 = null;
    this.title7 = null;
    this.title8 = null;
    this.title9 = null;
    this.title0 = null;
};
var aaa:any = function () {
    this.title1_ = null;
    this.title2_ = null;
    this.title3_ = null;
    this.title4_ = null;
    this.title5_ = null;
    this.title6_ = null;
    this.title7_ = null;
    this.title8_ = null;
    this.title9_ = null;
    this.title0_ = null;
    this.changes__ = proto;
    this.title1 = '123';
    this.title2 = '123';
    this.title3 = '123';
    this.title4 = '123';
    this.title5 = '123';
    this.title6 = '123';
    this.title7 = '123';
    this.title8 = '123';
    this.title9 = '123';
    this.title0 = '123';
};

/*aaa.prototype.title1_ = null;
aaa.prototype.title2_ = null;
aaa.prototype.title3_ = null;
aaa.prototype.title4_ = null;
aaa.prototype.title5_ = null;
aaa.prototype.title6_ = null;
aaa.prototype.title7_ = null;
aaa.prototype.title8_ = null;
aaa.prototype.title9_ = null;
aaa.prototype.title0_ = null;*/
aaa.prototype.__defineSetter__('title1', function (val:any) {this.title1_ = val; this.changes__.title1 = this.title1_;});
aaa.prototype.__defineSetter__('title2', function (val:any) {this.title2_ = val; this.changes__.title2 = this.title2_;});
aaa.prototype.__defineSetter__('title3', function (val:any) {this.title3_ = val; this.changes__.title3 = this.title3_;});
aaa.prototype.__defineSetter__('title4', function (val:any) {this.title4_ = val; this.changes__.title4 = this.title4_;});
aaa.prototype.__defineSetter__('title5', function (val:any) {this.title5_ = val; this.changes__.title5 = this.title5_;});
aaa.prototype.__defineSetter__('title6', function (val:any) {this.title6_ = val; this.changes__.title6 = this.title6_;});
aaa.prototype.__defineSetter__('title7', function (val:any) {this.title7_ = val; this.changes__.title7 = this.title7_;});
aaa.prototype.__defineSetter__('title8', function (val:any) {this.title8_ = val; this.changes__.title8 = this.title8_;});
aaa.prototype.__defineSetter__('title9', function (val:any) {this.title9_ = val; this.changes__.title9 = this.title9_;});
aaa.prototype.__defineSetter__('title0', function (val:any) {this.title0_ = val; this.changes__.title0 = this.title0_;});


var proto = Object.create({title1: null, title2: null, title3: null, title4: null, title5: null, title6: null, title7: null, title8: null, title9: null, title0: null});

var BB:any = (function () {
    function B() {
        this.title1_ = null;
        this.title2_ = null;
        this.title3_ = null;
        this.title4_ = null;
        this.title5_ = null;
        this.title6_ = null;
        this.title7_ = null;
        this.title8_ = null;
        this.title9_ = null;
        this.title0_ = null;

        this.changes__ = proto;
        //@observable
        this.title1 = '123';
        //@observable
        this.title2 = '123';
        //@observable
        this.title3 = '123';
        //@observable
        this.title4 = '123';
        //@observable
        this.title5 = '123';
        //@observable
        this.title6 = '123';
        //@observable
        this.title7 = '123';
        //@observable
        this.title8 = '123';
        //@observable
        this.title9 = '123';
        //@observable
        this.title0 = '123';
    }
    var getter = function(){return __observableGet(this.title1_, this, 'title1', 22347)};
    getter.displayName = 'B.title1.get';
    var setter = function(value:any){this.title1_ = value; this.changes__.title1 = this.title1_;/* this.title1_ = __observableSet(this.title1_, this, 'title1', 22347, value)*/};
    setter.displayName = 'B.title1.set';
    Object.defineProperty(B.prototype, "title1", {
        get: getter,
        set: setter,
        enumerable: true,
        configurable: true
    });
    var getter = function(){return __observableGet(this.title2_, this, 'title2', 22348)};
    getter.displayName = 'B.title2.get';
    var setter = function(value:any){this.title2_ = value; this.changes__.title2 = this.title2_;/* this.title2_ = __observableSet(this.title2_, this, 'title2', 22348, value)*/};
    setter.displayName = 'B.title2.set';
    Object.defineProperty(B.prototype, "title2", {
        get: getter,
        set: setter,
        enumerable: true,
        configurable: true
    });
    var getter = function(){return __observableGet(this.title3_, this, 'title3', 22349)};
    getter.displayName = 'B.title3.get';
    var setter = function(value:any){this.title3_ = value; this.changes__.title3 = this.title3_;/* this.title3_ = __observableSet(this.title3_, this, 'title3', 22349, value)*/};
    setter.displayName = 'B.title3.set';
    Object.defineProperty(B.prototype, "title3", {
        get: getter,
        set: setter,
        enumerable: true,
        configurable: true
    });
    var getter = function(){return __observableGet(this.title4_, this, 'title4', 22350)};
    getter.displayName = 'B.title4.get';
    var setter = function(value:any){this.title4_ = value; this.changes__.title4 = this.title4_;/* this.title4_ = __observableSet(this.title4_, this, 'title4', 22350, value)*/};
    setter.displayName = 'B.title4.set';
    Object.defineProperty(B.prototype, "title4", {
        get: getter,
        set: setter,
        enumerable: true,
        configurable: true
    });
    var getter = function(){return __observableGet(this.title5_, this, 'title5', 22351)};
    getter.displayName = 'B.title5.get';
    var setter = function(value:any){this.title5_ = value; this.changes__.title5 = this.title5_;/* this.title5_ = __observableSet(this.title5_, this, 'title5', 22351, value)*/};
    setter.displayName = 'B.title5.set';
    Object.defineProperty(B.prototype, "title5", {
        get: getter,
        set: setter,
        enumerable: true,
        configurable: true
    });
    var getter = function(){return __observableGet(this.title6_, this, 'title6', 22352)};
    getter.displayName = 'B.title6.get';
    var setter = function(value:any){this.title6_ = value; this.changes__.title6 = this.title6_;/* this.title6_ = __observableSet(this.title6_, this, 'title6', 22352, value)*/};
    setter.displayName = 'B.title6.set';
    Object.defineProperty(B.prototype, "title6", {
        get: getter,
        set: setter,
        enumerable: true,
        configurable: true
    });
    var getter = function(){return __observableGet(this.title7_, this, 'title7', 22353)};
    getter.displayName = 'B.title7.get';
    var setter = function(value:any){this.title7_ = value; this.changes__.title7 = this.title7_;/* this.title7_ = __observableSet(this.title7_, this, 'title7', 22353, value)*/};
    setter.displayName = 'B.title7.set';
    Object.defineProperty(B.prototype, "title7", {
        get: getter,
        set: setter,
        enumerable: true,
        configurable: true
    });
    var getter = function(){return __observableGet(this.title8_, this, 'title8', 22354)};
    getter.displayName = 'B.title8.get';
    var setter = function(value:any){this.title8_ = value; this.changes__.title8 = this.title8_;/* this.title8_ = __observableSet(this.title8_, this, 'title8', 22354, value)*/};
    setter.displayName = 'B.title8.set';
    Object.defineProperty(B.prototype, "title8", {
        get: getter,
        set: setter,
        enumerable: true,
        configurable: true
    });
    var getter = function(){return __observableGet(this.title9_, this, 'title9', 22355)};
    getter.displayName = 'B.title9.get';
    var setter = function(value:any){this.title9_ = value; this.changes__.title9 = this.title9_;/* this.title9_ = __observableSet(this.title9_, this, 'title9', 22355, value)*/};
    setter.displayName = 'B.title9.set';
    Object.defineProperty(B.prototype, "title9", {
        get: getter,
        set: setter,
        enumerable: true,
        configurable: true
    });
    var getter = function(){return __observableGet(this.title0_, this, 'title0', 22356)};
    getter.displayName = 'B.title0.get';
    var setter = function(value:any){this.title0_ = value; this.changes__.title0 = this.title0_;/* this.title0_ = __observableSet(this.title0_, this, 'title0', 22356, value)*/};
    setter.displayName = 'B.title0.set';
    Object.defineProperty(B.prototype, "title0", {
        get: getter,
        set: setter,
        enumerable: true,
        configurable: true
    });
    return B;
})();

console.time('perf');
var list:B[] = [];
for (var i = 0; i < 1000000; i++) {
    //a.title = 'Hey';
    //new B;
    //new BB;
    new BB;
    //new aaa;
}
console.timeEnd('perf');




