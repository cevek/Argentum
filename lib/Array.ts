
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
