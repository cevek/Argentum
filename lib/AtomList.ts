class ListFormula<T> extends AtomFormula<T> {
    constructor(owner:any, getter?:(prevValue:T)=>List<T>, params?:IAtom<T>, name = ''){
        super(owner, null, null, name);
        this.getterList = getter;
    }

    getterList:any;

    get(index:number) {
        if (this.getterList) {
            var temp = AtomFormula.lastCalledGetter;
            AtomFormula.lastCalledGetter = this;
            this.clearMasters();
            this.replace(this.getterList.call(this.owner, this));
            AtomFormula.lastCalledGetter = temp;
        }
        this.touch();
        return this[index];
    }

    update() {
        AtomFormula.depth++;
        var updated = false;
        if (this.needUpdate === NeedUpdate.SET) {
            updated = true;
        }
        if (this.needUpdate === NeedUpdate.GETTER && this.getterList) {
            var temp = AtomFormula.lastCalledGetter;
            AtomFormula.lastCalledGetter = this;
            this.clearMasters();
            var old_value = this.value;
            this.value = this.getterList.call(this.owner, this);
            updated = old_value !== this.value;
            AtomFormula.lastCalledGetter = temp;
        }
        this._update(updated);
        AtomFormula.depth--;
    }

    set() {

    }

    clear() {
        while (this.length) this.pop();
    }

    remove(item:T) {
        var pos = this.indexOf(item);
        if (pos > -1) {
            this.splice(pos, 1);
        }
    }

    replace(array:{[index: number]: T; length: number}) {
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

    protected changed() {
        this.needUpdate = NeedUpdate.SET;
        AtomFormula.setAtoms.push(this);
        if (!AtomFormula.willDigests) {
            postMessage('digest', '*');
            AtomFormula.willDigests = true;
        }
        console.log("changed");
    }

    toString():string {return Array.prototype.toString.call(this)}

    toLocaleString():string {return Array.prototype.toLocaleString.call(this)}

    concat<U extends List<T>>(...items:U[]):List<T>;
    concat(...items:T[]) {return new List<T>(Array.prototype.concat.apply(this, items))}

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

    slice(start?:number, end?:number):List<T> {
        var ret = Array.prototype.slice.call(this, start, end);
        return new List<T>(ret);
    }

    toArray() {
        return Array.prototype.slice.call(this);
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

    every(callbackfn:(value:T, index:number, array:List<T>) => boolean, thisArg?:any):boolean {
        return Array.prototype.every.call(this, callbackfn, thisArg)
    }

    some(callbackfn:(value:T, index:number, array:List<T>) => boolean, thisArg?:any):boolean {
        return Array.prototype.some.call(this, callbackfn, thisArg)
    }

    forEach(callbackfn:(value:T, index:number, array:List<T>) => void, thisArg?:any):void {
        return Array.prototype.forEach.call(this, callbackfn, thisArg)
    }

    map<U>(callbackfn:(value:T, index:number, array:List<T>) => U, thisArg?:any):List<U> {
        return new List<U>(Array.prototype.map.call(this, callbackfn, thisArg))
    }

    filter(callbackfn:(value:T, index:number, array:List<T>) => boolean, thisArg?:any):List<T> {
        return new List<T>(Array.prototype.filter.call(this, callbackfn, thisArg))
    }

    reduce(callbackfn:(prevVal:T, curVal:T, curIndex:number, array:List<T>) => T, inVal?:T):T;
    reduce<U>(callbackfn:(prevVal:U, curVal:T, curIndex:number, array:List<T>) => U, inVal:U):U {
        return Array.prototype.reduce.call(this, callbackfn, inVal)
    }

    reduceRight(callbackfn:(prevVal:T, curVal:T, curIndex:number, array:List<T>) => T, inVal?:T):T;
    reduceRight<U>(callbackfn:(prevVal:U, curVal:T, curIndex:number, array:List<T>) => U, inVal:U):U {
        return Array.prototype.reduceRight.call(this, callbackfn, inVal)
    }

    length = 0;
[n: number]: T;
}

class List<T> extends ListFormula<T> {
    constructor(array?:{[index: number]: T; length: number}) {
        super(null, void 0, void 0, arguments[3]);
        if (array) {
            for (var i = 0; i < array.length; i++) {
                this[i] = array[i];
            }
            this.length = array.length;
        }
    }
}
