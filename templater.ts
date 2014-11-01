"use strict";


class Atomic<T> {
    private fn:()=>T;

    id:number;
    value:T;

    constructor(val?:any) {
        this.id = ++Atomic.counter;

        if (val && val.constructor === Function) {
            var temp = Atomic.prevLastCalled;
            Atomic.prevLastCalled = Atomic.lastCalled;
            Atomic.lastCalled = this;
            this.fn = val;
            this.value = val();
            Atomic.lastCalled = Atomic.prevLastCalled;
            Atomic.prevLastCalled = temp;
        }
        else {
            this.value = val;
        }
    }

    static counter = 0;
    private static prevLastCalled:Atomic<any> = null;
    private static lastCalled:Atomic<any> = null;

    get():T {
        var ff = Atomic.lastCalled;
        if (ff) {
            if (!this.slaves) {
                this.slaves = {};
            }

            this.slaves[ff.id] = ff;
            if (!ff.deps) {
                ff.deps = {};
            }

            ff.deps[this.id] = this;
        }

        return this.value;
    }

    set(val:T) {
        this.value = val;
        this.update(false);
    }

    private slaves:{[index: number]: Atomic<any>};
    private deps:{[index: number]: Atomic<any>};
    private listeners:Array<(value:T)=>void>;

    addListener(fn:(value:T)=>void) {
        if (!this.listeners) {
            this.listeners = [];
        }
        var id = this.listeners.length;
        this.listeners[id] = fn;
        fn["$id"] = id;
    }

    removeListener(fn:(value:T)=>void) {
        this.listeners[fn["$id"]] = null;
    }

    private update(calcThisVal) {
        if (calcThisVal) {
            this.value = this.fn();
        }

        for (var i in this.slaves) {
            this.slaves[i].update(true);
        }

        if (this.listeners) {
            for (i = 0; i < this.listeners.length; i++) {
                if (this.listeners[i]) {
                    this.listeners[i](this.value);
                }
            }
        }

    }

    static createGetters(obj) {
        var keys = Object.keys(obj);
        var properties:any = {};

        for (var i = 0; i < keys.length; i++) {
            var key = keys[i];
            if (key[0] === '$') {
                properties[key.substring(1)] = {
                    get: Atomic.prototype.get.bind(obj[key]),
                    set: Atomic.prototype.set.bind(obj[key]),
                    enumerable: true,
                    configurable: true
                };
                properties[key] = {
                    enumerable: false,
                    configurable: false,
                    writable: false
                }

            }
            if (obj[key].constructor === AList) {
                properties[key] = {
                    enumerable: true,
                    configurable: false,
                    writable: false
                }
            }
        }
        Object.defineProperties(obj, properties);
    }

}

window['ANumber'] = Atomic;
window['AString'] = Atomic;
window['ABool'] = Atomic;
window['ADate'] = Atomic;
declare class ANumber extends Atomic<number> {}
declare class AString extends Atomic<string> {}
declare class ABool extends Atomic<boolean> {}
declare class ADate extends Atomic<Date> {}

class AList<T> {
    length = 0;

    constructor(values?:T[]) {
        if (values) {
            for (var i = 0; i < values.length; i++) {
                this[i] = values[i];
            }
            this.length = values.length;
        }
    }

    add(value:T) {
        this[this.length++] = value;
        this.onChange('added', this.length - 1);
    }

    set set(array:T[]) {
        for (var i = 0; i < array.length; i++) {
            this[i] = array[i];
        }
        for (var i = array.length; i < this.length; i++) {
            this[i] = null;
        }
        this.length = array.length;
        this.onChange('setted');
    }

    setItem(item:number, value:T) {
        this[item] = value;
        if (this.length < item) {
            this.length = item + 1;
        }
        this.onChange('updated', item);
    }

    push(value:T) {
        this[this.length++] = value;
        this.onChange('added', this.length - 1);
    }

    get(item:number):T {
        return this[item];
    }

    remove(item:number) {

    }

    splice() {

    }

    slice() {
    }

    map(fn:(val:T, item:number)=>any, split?:any) {
        var newArray = [];
        for (var i = 0, len = this.length; i < len; i++) {
            newArray.push(fn(this[i], i));
            if (split && i + 1 < len) {
                newArray.push(split);
            }
        }
        return newArray;
    }

    private onChange(event:string, item?:number) {
        for (var i = 0; i < this.listeners.length; i++) {
            if (this.listeners[i]) {
                this.listeners[i](event, item);
            }
        }
    }

    private listeners = [];

    addListener(fn:(event:string, value:T)=>void) {
        var id = this.listeners.length;
        this.listeners[id] = fn;
        fn["$id"] = id;
    }

    removeListener(fn:(event:string, value:T)=>void) {
        this.listeners[fn["$id"]] = null;
    }

}

function renderMap(node, tree) {
    tree.domNode = document.createTextNode('');
    node.appendChild(tree.domNode);

    var array = tree.$map;
    if (array) {

        tree.children = [];
        for (var i = 0; i < array.length; i++) {
            tree.children[i] = tree.fn(array[i], i);

            render(node, tree.children[i], tree.domNode);
            if (tree.$split && i > 0) {
                node.insertBefore(document.createTextNode(tree.$split), tree.children[i].domNode);
            }
            //render(node, [tree.children[i], i < array.length - 1 ? tree.$split : ''], tree.domNode);
        }
        array.addListener(function (event, item) {
            if (event === 'added') {
                var val = array.get(item);
                tree.children[item] = tree.fn(val, item);

                render(node, [tree.children.length > 0 ? tree.$split : '', tree.children[item]], item < tree.children.length - 1 ? tree.children[item + 1].domNode : tree.domNode);
                console.log(event, item, val);
            }

        });
    }
}

function walkArray(node, tree) {
    for (var j = 0; j < tree.length; j++) {
        if (tree[j]) {
            render(node, tree[j]);
        }
    }
}

function renderTag(node, tree, nodeBefore) {
    tree.domNode = document.createElement(tree.tag);
    if (tree.attrs) {
        for (var key in tree.attrs) {
            tree.domNode[key] = tree.attrs[key];
        }
    }

    node.insertBefore(tree.domNode, nodeBefore);

    var childrenLen = tree.children.length;
    if (childrenLen == 1) {
        var textNode = tree.children[0];

        if (textNode.constructor === Function) {
            var atom = new Atomic<string>(textNode);
            tree.domNode.textContent = atom.value || '';
            atom.addListener(function () {
                tree.domNode.textContent = atom.value || '';
            });
            return;
        }

        if (!textNode.tag) {
            tree.domNode.textContent = textNode || '';
            return;
        }
    }

    for (var i = 0; i < childrenLen; i++) {
        render(tree.domNode, tree.children[i]);
    }
}

function render(node, tree, nodeBefore = null) {
    if (tree.constructor === Array) {
        walkArray(node, tree);
        return;
    }
    if (tree.$map) {
        renderMap(node, tree);
        return;
    }
    if (tree.tag) {
        renderTag(node, tree, nodeBefore);
        return;
    }

    text(node, tree, nodeBefore);
}

function text(node, text, nodeBefore) {
    var domNode;
    if (text.constructor === Function) {
        var atom = new Atomic<string>(text);
        domNode = document.createTextNode(atom.get() || '');
        atom.addListener(function () {
            domNode.textContent = atom.get() || '';
        });
    }
    else {
        domNode = document.createTextNode(text || '');
    }
    node.insertBefore(domNode, nodeBefore);
}

function prepareTag(tagExpr, obj) {
    var className = '';
    var lastDot = -1;
    var len = tagExpr.length;
    for (var i = 0; i < len + 1; i++) {
        if (i === len || tagExpr[i] === '.') {
            if (lastDot == -1) {
                obj.tag = tagExpr.substring(0, i);
            }
            else {
                className += tagExpr.substring(lastDot + 1, i);
                if (i != len) {
                    className += ' ';
                }
            }
            lastDot = i;
        }
    }
    if (!obj.attrs && className) {
        obj.attrs = {className: className};
    }
}

function $a(tagExpr:string, attrs?:{[key: string]: string}, ...children:any[]) {
    var obj = {tag: '', domNode: null, attrs: attrs, children: children};
    prepareTag(tagExpr, obj);
    return obj;
}

function map(array:AList<any>, fn:(item:any, n:number)=>any, split = '') {
    return {tag: 'map', attrs: null, $map: array, $split: split, fn: fn, children: null};
}

class At {
    constructor() {
        if (this.constructor["atomized"]) {
            return;
        }
        this.constructor["atomized"] = true;
    }
}
class FFF {

}
class ABC extends At {
    get a() {return new AString}

    get b() {return new Atomic<FFF>()}

    get c():string {return}

    get d():string {return}

    constructor() {
        super();
        //this.c = 'werwq';
        //this.d = '324';

    }

}


var abc = new ABC();
//var a = abc.a.get().indexOf('23');





