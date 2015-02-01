class ListFormula<T> extends AtomFormula<T> {
    constructor(owner:any, getter?:(prevValue:T)=>List<T>, params?:IAtom<T>, name?:string) {
        super(owner, null, null, name);
        this.length = 0;
        this.calculated = false;
        this.getterList = getter;
        if (this.getterList) {
            this.getterList.displayName = name + '.getter';
        }
        if (AtomFormula.debugMode) {
            //todo: just copy function code
            //this.update = <()=>void>new Function('return ' + ListFormula.prototype.update.toString())();
            //this.update.displayName = 'Atom.' + this.name;
        }
    }

    getterList:any;
    calculated:boolean;

    get(index:number) {
        if (this.getterList && !this.calculated) {
            this.calculated = true;
            var temp = AtomFormula.lastCalledGetter;
            AtomFormula.lastCalledGetter = this;
            this.clearMasters();
            var res = this.getterList.call(this.owner, this);
            this._replace(res);
            AtomFormula.lastCalledGetter = temp;
        }
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
            var res = this.getterList.call(this.owner, this);
            this._replace(res);
            console.log("update", res.length, this.length);

            updated = true;
            AtomFormula.lastCalledGetter = temp;
        }
        this._update(updated);
        AtomFormula.depth--;
    }

    protected callListeners() {
        if (this.listeners) {
            //Atom.debugMode && console.log(this.fullname + ".listeners");
            for (var i = 0; i < this.listeners.length; i++) {
                var listener = this.listeners[i];
                listener.callback.call(listener.thisArg, this, listener.arg1, listener.arg2, listener.arg3);
            }
        }
    }

    subscribeCaller(){
        this.touch();
        return this;
    }

    set() {

    }

    put(index: number, value: T){
        if (this.length <= index){
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

    protected _replace(array:Iterable<T>){
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
        if (this.id === 41) debugger;
        AtomFormula.setAtoms[this.id] = this;
        if (!AtomFormula.willDigests) {
            postMessage('digest', '*');
            AtomFormula.willDigests = true;
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

class List<T> extends ListFormula<T> {
    constructor(array?:Iterable<T>) {
        super(null, void 0, void 0, arguments[3]);
        if (array) {
            for (var i = 0; i < array.length; i++) {
                this[i] = array[i];
            }
            this.length = array.length;
        }
    }
}
