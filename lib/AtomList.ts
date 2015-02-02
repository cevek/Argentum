class List<T> extends Atom<T> {
    constructor(array?:Iterable<T>) {
        super();
        if (array) {
            for (var i = 0; i < array.length; i++) {
                this[i] = array[i];
            }
            this.length = array.length;
        }
    }

    get value():any {
        if (this.calculated) {
            return void 0;
        }
        return this;
    }

    set value(val:any) {
        this.calculated = true;
        if (val !== void 0) {
            this._replace(val);
        }
    }

    protected compare(a:any, b:any) {
        return false;
    }

    calculated:boolean;

    get(index:number) {
        //this.get();
        if (this.getter && !this.calculated) {
            this.calculated = true;
            var temp = Atom.lastCalledGetter;
            Atom.lastCalledGetter = this;
            this.clearMasters();
            var res = this.getter.call(this.owner, this);
            this._replace(res);
            Atom.lastCalledGetter = temp;
        }
        return this[index];
    }

    //todo:remove from here
    protected callListeners() {
        if (this.listeners) {
            //Atom.debugMode && console.log(this.fullname + ".listeners");
            for (var i = 0; i < this.listeners.length; i++) {
                var listener = this.listeners[i];
                listener.callback.call(listener.thisArg, this, listener.arg1, listener.arg2, listener.arg3);
            }
        }
    }

    subscribeCaller() {
        this.touch();
        return this;
    }

    set() {

    }

    put(index:number, value:T) {
        if (this.length <= index) {
            this.length = index + 1;
        }
        this[index] = value;
    }

    isEmpty() {
        this.get(0);
        return this.length === 0;
    }

    isNotEmpty() {
        this.get(0);
        return this.length > 0;
    }

    clear() {
        this.get(0);
        while (this.length) this.pop();
    }

    remove(item:T) {
        this.get(0);
        var pos = this.indexOf(item);
        if (pos > -1) {
            this.splice(pos, 1);
        }
    }

    protected _replace(array:Iterable<T>) {
        for (var i = 0; i < array.length; i++) {
            this[i] = array[i];
        }
        for (var i = array.length; i < this.length; i++) {
            this[i] = null;
        }
        this.length = array.length;
    }

    replace(array:Iterable<T>) {
        this.get(0);
        this._replace(array);
        this.changed();
    }

    protected changed() {
        this.needUpdate = NeedUpdate.SET;
        Atom.setAtoms[this.id] = this;
        if (!Atom.willDigests) {
            postMessage('digest', '*');
            Atom.willDigests = true;
        }
    }

    concat<U extends List<T>>(...items:U[]):List<T>;
    concat(...items:T[]) {
        this.get(0);
        return new List<T>(Array.prototype.concat.apply(this, items))
    }

    join(separator?:string):string {
        this.get(0);
        return Array.prototype.join.call(this, separator)
    }

    pop():T {
        this.get(0);
        var ret = Array.prototype.pop.call(this);
        this.changed();
        return ret;
    }

    push(...items:T[]):number {
        this.get(0);
        var ret = Array.prototype.push.apply(this, items);
        this.changed();
        return ret;
    }

    reverse() {
        this.get(0);
        var ret = Array.prototype.reverse.call(this);
        this.changed();
        return this;
    }

    shift():T {
        this.get(0);
        var ret = Array.prototype.shift.call(this);
        this.changed();
        return ret;
    }

    slice(start?:number, end?:number):List<T> {
        this.get(0);
        var ret = Array.prototype.slice.call(this, start, end);
        return new List<T>(ret);
    }

    toArray() {
        this.get(0);
        return Array.prototype.slice.call(this);
    }

    sort(compareFn?:(a:T, b:T) => number) {
        this.get(0);
        var ret = Array.prototype.sort.call(this, compareFn);
        this.changed();
        return this;
    }

    splice(start:number, deleteCount?:number, ...items:T[]) {
        this.get(0);
        var ret = Array.prototype.splice.apply(this, arguments);
        this.changed();
        return this;
    }

    unshift(...items:T[]):number {
        this.get(0);
        var ret = Array.prototype.unshift.apply(this, items);
        this.changed();
        return ret;
    }

    indexOf(searchElement:T, fromIndex?:number):number {
        this.get(0);
        return Array.prototype.indexOf.call(this, searchElement, fromIndex)
    }

    lastIndexOf(searchElement:T, fromIndex?:number):number {
        this.get(0);
        return Array.prototype.lastIndexOf.call(this, searchElement, fromIndex)
    }

    every(callbackfn:(value:T, index:number, array:List<T>) => boolean, thisArg?:any):boolean {
        this.get(0);
        return Array.prototype.every.call(this, callbackfn, thisArg)
    }

    some(callbackfn:(value:T, index:number, array:List<T>) => boolean, thisArg?:any):boolean {
        this.get(0);
        return Array.prototype.some.call(this, callbackfn, thisArg)
    }

    forEach(callbackfn:(value:T, index:number, array:List<T>) => void, thisArg?:any):void {
        this.get(0);
        return Array.prototype.forEach.call(this, callbackfn, thisArg)
    }

    map<U>(callbackfn:(value:T, index:number, array:List<T>) => U, thisArg?:any):List<U> {
        this.get(0);
        return new List<U>(Array.prototype.map.call(this, callbackfn, thisArg))
    }

    filter(callbackfn:(value:T, index:number, array:List<T>) => boolean, thisArg?:any):List<T> {
        this.get(0);
        return new List<T>(Array.prototype.filter.call(this, callbackfn, thisArg))
    }

    reduce(callbackfn:(prevVal:T, curVal:T, curIndex:number, array:List<T>) => T, inVal?:T):T;
    reduce<U>(callbackfn:(prevVal:U, curVal:T, curIndex:number, array:List<T>) => U, inVal:U):U {
        this.get(0);
        return Array.prototype.reduce.call(this, callbackfn, inVal)
    }

    reduceRight(callbackfn:(prevVal:T, curVal:T, curIndex:number, array:List<T>) => T, inVal?:T):T;
    reduceRight<U>(callbackfn:(prevVal:U, curVal:T, curIndex:number, array:List<T>) => U, inVal:U):U {
        this.get(0);
        return Array.prototype.reduceRight.call(this, callbackfn, inVal)
    }

    length:number;
[n: number]: T;
}

class ListFormula<T> extends List<T> {
    constructor(owner:any, getter?:(prevValue:T)=>List<T>, params?:IAtom<T>, name?:string) {
        super();
        this.length = 0;
        this.calculated = false;
        this.getter = <any>getter;
        if (Atom.debugMode) {
            //todo: just copy function code
            //this.update = <()=>void>new Function('return ' + ListFormula.prototype.update.toString())();
            //this.update.displayName = 'Atom.' + this.name;
        }
    }

}
