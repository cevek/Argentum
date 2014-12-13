interface ArrayListener {
    callback: (array?:any, arg1?:any, arg2?:any, arg3?:any)=>void;
    arg1: any;
    arg2: any;
    arg3: any;
}
interface Array<T> {
    addListener<R1,R2,R3>(fn:(val?:T[], arg1?:R1, arg2?:R2, arg3?:R3)=>void, arg1?:R1, arg2?:R2, arg3?:R3):void;
    removeListener(fn:(val?:T[])=>void):void;
    changed():void;
    listeners: ArrayListener[];
    [idx: string]: any;
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
Array.prototype.changed = function () {
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

Object.defineProperty(Array.prototype, "__push", {
    value: Array.prototype.push
});
Array.prototype.push = function (item:any) {
    this.changed();
    return this.__push(item);
};

Object.defineProperty(Array.prototype, "__unshift", {
    value: Array.prototype.unshift
});
Array.prototype.unshift = function (item:any) {
    this.changed();
    return this.__unshift(item);
};

Object.defineProperty(Array.prototype, "__pop", {
    value: Array.prototype.pop
});
Array.prototype.pop = function () {
    this.changed();
    return this.__pop();
};

Object.defineProperty(Array.prototype, "__shift", {
    value: Array.prototype.shift
});
Array.prototype.shift = function () {
    this.changed();
    return this.__shift();
};

Object.defineProperty(Array.prototype, "__sort", {
    value: Array.prototype.sort
});
Array.prototype.sort = function (fn:any) {
    this.changed();
    return this.__sort(fn);
};

Object.defineProperty(Array.prototype, "__splice", {
    value: Array.prototype.splice
});
Array.prototype.splice = function (start:number, deleteCount?:number) {
    this.changed();
    if (arguments.length > 2) {
        return this.__splice.apply(this, arguments);
    }
    else {
        return this.__splice(start, deleteCount);
    }
};
