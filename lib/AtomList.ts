class AtomList<T> {
    constructor(array?:T[]) {
        if (array) {
            for (var i = 0; i < array.length; i++) {
                this[i] = array[i];
            }
            this.length = array.length;
        }
    }

    get() {

    }

    set() {

    }

    clear() {
        while (this.length) this.pop();
    }

    replace(array:T[]) {
        for (var i = 0; i < array.length; i++) {
            this[i] = array[i];
        }
        var oldLen = this.length;
        this.length = array.length;
        for (var i = oldLen; i < array.length; i++) {
            this.pop();
        }
        this.changed();
    }

    changed() {
        console.log("changed");
    }

    toString():string {return Array.prototype.toString.call(this)}

    toLocaleString():string {return Array.prototype.toLocaleString.call(this)}

    concat<U extends AtomList<T>>(...items:U[]):AtomList<T>;
    concat(...items:T[]) {return new AtomList<T>(Array.prototype.concat.apply(this, items))}

    join(separator?:string):string {return Array.prototype.join.call(this, separator)}

    pop():T {
        var ret = Array.prototype.pop.call(this);
        this.changed();
        return ret;
    }

    push(...items:T[]):number {
        var ret = Array.prototype.push.apply(this, items);
        this.changed();
        return ret;
    }

    reverse() {
        var ret = Array.prototype.reverse.call(this);
        this.changed();
        return this;
    }

    shift():T {
        var ret = Array.prototype.shift.call(this);
        this.changed();
        return ret;
    }

    slice(start:number, end?:number):AtomList<T> {
        var ret = Array.prototype.slice.call(this, start, end);
        return new AtomList<T>(ret);
    }

    sort(compareFn?:(a:T, b:T) => number) {
        var ret = Array.prototype.sort.call(this, compareFn);
        this.changed();
        return this;
    }

    splice(start:number, deleteCount?:number, ...items:T[]) {
        var ret = Array.prototype.splice.apply(this, arguments);
        this.changed();
        return this;
    }

    unshift(...items:T[]):number {
        var ret = Array.prototype.unshift.apply(this, items);
        this.changed();
        return ret;
    }

    indexOf(searchElement:T, fromIndex?:number):number {
        return Array.prototype.indexOf.call(this, searchElement, fromIndex)
    }

    lastIndexOf(searchElement:T, fromIndex?:number):number {
        return Array.prototype.lastIndexOf.call(this, searchElement, fromIndex)
    }

    every(callbackfn:(value:T, index:number, array:AtomList<T>) => boolean, thisArg?:any):boolean {
        return Array.prototype.every.call(this, callbackfn, thisArg)
    }

    some(callbackfn:(value:T, index:number, array:AtomList<T>) => boolean, thisArg?:any):boolean {
        return Array.prototype.some.call(this, callbackfn, thisArg)
    }

    forEach(callbackfn:(value:T, index:number, array:AtomList<T>) => void, thisArg?:any):void {
        return Array.prototype.forEach.call(this, callbackfn, thisArg)
    }

    map<U>(callbackfn:(value:T, index:number, array:AtomList<T>) => U, thisArg?:any):AtomList<U> {
        return new AtomList<U>(Array.prototype.map.call(this, callbackfn, thisArg))
    }

    filter(callbackfn:(value:T, index:number, array:AtomList<T>) => boolean, thisArg?:any):AtomList<T> {
        return new AtomList<T>(Array.prototype.filter.call(this, callbackfn, thisArg))
    }

    reduce(callbackfn:(prevVal:T, curVal:T, curIndex:number, array:AtomList<T>) => T, inVal?:T):T;
    reduce<U>(callbackfn:(prevVal:U, curVal:T, curIndex:number, array:AtomList<T>) => U, inVal:U):U {
        return Array.prototype.reduce.call(this, callbackfn, inVal)
    }

    reduceRight(callbackfn:(prevVal:T, curVal:T, curIndex:number, array:AtomList<T>) => T, inVal?:T):T;
    reduceRight<U>(callbackfn:(prevVal:U, curVal:T, curIndex:number, array:AtomList<T>) => U, inVal:U):U {
        return Array.prototype.reduceRight.call(this, callbackfn, inVal)
    }

    length = 0;
[n: number]: T;
}

var a = new AtomList();