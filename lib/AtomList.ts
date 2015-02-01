class ListFormula<T> extends AtomFormula<T> {
    constructor(owner:any, getter?:(prevValue:T)=>List<T>, params?:IAtom<T>, name?:string) {
        this.length = this.length || 0;
        this.getterList = getter;
        if (this.getterList) {
            this.getterList.displayName = name + '.getter';
            var temp = AtomFormula.lastCalledGetter;
            AtomFormula.lastCalledGetter = this;
            this.clearMasters();
            var res = this.getterList.call(this.owner, this);
            this.replace(res);
            console.log("AA", this, res);

            AtomFormula.lastCalledGetter = temp;
        }
        super(owner, null, null, name);
        return this.createNamedInstance();
    }

    getterList:any;

    get(index:number) {
        this.touch();
        return this[index];
    }

    protected update() {
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
            this.replace(this.getterList.call(this.owner, this));
            updated = old_value !== this.value;
            AtomFormula.lastCalledGetter = temp;
        }
        this._update(updated);
        AtomFormula.depth--;
    }

    set() {

    }

    isEmpty() {
        this.touch();
        return this.length === 0;
    }

    isNotEmpty() {
        this.touch();
        return this.length > 0;
    }

    clear() {
        this.touch();
        while (this.length) this.pop();
    }

    remove(item:T) {
        this.touch();
        var pos = this.indexOf(item);
        if (pos > -1) {
            this.splice(pos, 1);
        }
    }

    replace(array:Iterable<T>) {
        this.touch();
        for (var i = 0; i < array.length; i++) {
            this[i] = array[i];
        }
        var oldLen = this.length;
        this.length = array.length;
        for (var i = array.length; i < oldLen; i++) {
            this.pop();
        }
        this.changed();
    }

    protected changed() {
        this.needUpdate = NeedUpdate.SET;
        AtomFormula.setAtoms[this.id] = this;
        if (!AtomFormula.willDigests) {
            postMessage('digest', '*');
            AtomFormula.willDigests = true;
        }
        console.log("changed");
    }

    toString():string {
        this.touch();
        return Array.prototype.toString.call(this)
    }

    toLocaleString():string {
        this.touch();
        return Array.prototype.toLocaleString.call(this)
    }

    concat<U extends List<T>>(...items:U[]):List<T>;
    concat(...items:T[]) {
        this.touch();
        return new List<T>(Array.prototype.concat.apply(this, items))
    }

    join(separator?:string):string {
        this.touch();
        return Array.prototype.join.call(this, separator)
    }

    pop():T {
        this.touch();
        var ret = Array.prototype.pop.call(this);
        this.changed();
        return ret;
    }

    push(...items:T[]):number {
        this.touch();
        var ret = Array.prototype.push.apply(this, items);
        this.changed();
        return ret;
    }

    reverse() {
        this.touch();
        var ret = Array.prototype.reverse.call(this);
        this.changed();
        return this;
    }

    shift():T {
        this.touch();
        var ret = Array.prototype.shift.call(this);
        this.changed();
        return ret;
    }

    slice(start?:number, end?:number):List<T> {
        this.touch();
        var ret = Array.prototype.slice.call(this, start, end);
        return new List<T>(ret);
    }

    toArray() {
        this.touch();
        return Array.prototype.slice.call(this);
    }

    sort(compareFn?:(a:T, b:T) => number) {
        this.touch();
        var ret = Array.prototype.sort.call(this, compareFn);
        this.changed();
        return this;
    }

    splice(start:number, deleteCount?:number, ...items:T[]) {
        this.touch();
        var ret = Array.prototype.splice.apply(this, arguments);
        this.changed();
        return this;
    }

    unshift(...items:T[]):number {
        this.touch();
        var ret = Array.prototype.unshift.apply(this, items);
        this.changed();
        return ret;
    }

    indexOf(searchElement:T, fromIndex?:number):number {
        this.touch();
        return Array.prototype.indexOf.call(this, searchElement, fromIndex)
    }

    lastIndexOf(searchElement:T, fromIndex?:number):number {
        this.touch();
        return Array.prototype.lastIndexOf.call(this, searchElement, fromIndex)
    }

    every(callbackfn:(value:T, index:number, array:List<T>) => boolean, thisArg?:any):boolean {
        this.touch();
        return Array.prototype.every.call(this, callbackfn, thisArg)
    }

    some(callbackfn:(value:T, index:number, array:List<T>) => boolean, thisArg?:any):boolean {
        this.touch();
        return Array.prototype.some.call(this, callbackfn, thisArg)
    }

    forEach(callbackfn:(value:T, index:number, array:List<T>) => void, thisArg?:any):void {
        this.touch();
        return Array.prototype.forEach.call(this, callbackfn, thisArg)
    }

    map<U>(callbackfn:(value:T, index:number, array:List<T>) => U, thisArg?:any):List<U> {
        this.touch();
        return new List<U>(Array.prototype.map.call(this, callbackfn, thisArg))
    }

    filter(callbackfn:(value:T, index:number, array:List<T>) => boolean, thisArg?:any):List<T> {
        this.touch();
        return new List<T>(Array.prototype.filter.call(this, callbackfn, thisArg))
    }

    reduce(callbackfn:(prevVal:T, curVal:T, curIndex:number, array:List<T>) => T, inVal?:T):T;
    reduce<U>(callbackfn:(prevVal:U, curVal:T, curIndex:number, array:List<T>) => U, inVal:U):U {
        this.touch();
        return Array.prototype.reduce.call(this, callbackfn, inVal)
    }

    reduceRight(callbackfn:(prevVal:T, curVal:T, curIndex:number, array:List<T>) => T, inVal?:T):T;
    reduceRight<U>(callbackfn:(prevVal:U, curVal:T, curIndex:number, array:List<T>) => U, inVal:U):U {
        this.touch();
        return Array.prototype.reduceRight.call(this, callbackfn, inVal)
    }

    length:number;
[n: number]: T;
}

class List<T> extends ListFormula<T> {
    constructor(array?:Iterable<T>) {
        if (array) {
            for (var i = 0; i < array.length; i++) {
                this[i] = array[i];
            }
            this.length = array.length;
        }
        super(null, void 0, void 0, arguments[3]);
        return this.createNamedInstance();
    }
}
