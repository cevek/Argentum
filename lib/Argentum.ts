module Arg {

    export var observable:any = {};

    export function Atomizer(constructor) {
        if (!constructor['observed']) {
            var code = constructor.toString();
            var reg = /this.(\w+)\s*=\s*Arg.observable/g;
            var m;
            while (m = reg.exec(code)) {
                var key = m[1];
                var props:any = {
                    enumerable: true,
                    get: new Function(" if (!this.$" + key + ") {this.$" + key + " = new Arg.Atomic();} return this.$" + key + ".get()"),
                    set: new Function("val", "if (val === Arg.observable) return; if (!this.$" + key + ") {this.$" + key + " = new Arg.Atomic();} this.$" + key + ".set(val)")
                };
                Object.defineProperty(constructor.prototype, key, props);
            }
        }
    }

    export class Atomic<T> {
        private fn:()=>T;

        id:number;
        value:T;

        constructor(val?:()=>T);
        constructor(val?:T);
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
            if (fn['_inAtoms']) {
                if (fn['_inAtoms'][this.id]) {
                    return;
                }
            }
            else {
                fn['_inAtoms'] = {};
            }
            fn['_inAtoms'][this.id] = this;
            this.listeners.push(fn);
        }

        removeListener(fn:(value:T)=>void) {
            if (this.listeners) {
                var i = this.listeners.indexOf(fn);
                if (i > -1) {
                    this.listeners[i] = null;
                }
            }
        }

        private update(calcThisVal) {
            if (calcThisVal) {
                //console.log("update", this.id, this.deps);

                //Todo: iter my deps and remove their slave with me, clear deps
                if (this.deps) {
                    for (var id in this.deps) {
                        if (this.deps[id].slaves) {
                            this.deps[id].slaves[this.id] = null;
                        }
                    }
                    this.deps = null;
                }
                var temp = Atomic.prevLastCalled;
                Atomic.prevLastCalled = Atomic.lastCalled;
                Atomic.lastCalled = this;
                this.value = this.fn();
                Atomic.lastCalled = Atomic.prevLastCalled;
                Atomic.prevLastCalled = temp;
            }

            if (this.slaves) {
                for (var i in this.slaves) {
                    if (this.slaves[i]) {
                        this.slaves[i].update(true);
                    }
                }
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

    export class AList<T> {
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

    function renderMapHelper(node, tree, array) {

        if (tree.domNode) {
            while (tree.domNode.firstChild) {
                tree.domNode.removeChild(tree.domNode.firstChild);
            }
        }
        //tree.domNode = document.createDocumentFragment();
        //tree.domNode.appendChild(document.createTextNode('fuck'));

        tree.children = [];
        for (var i = 0; i < array.length; i++) {
            tree.children[i] = tree.fn(array[i], i);
            render(tree.domNode, tree.children[i]);
            /*
             if (tree.$split && i > 0) {
             node.insertBefore(document.createTextNode(tree.$split), tree.children[i].domNode);
             }
             */
            //render(node, [tree.children[i], i < array.length - 1 ? tree.$split : ''], tree.domNode);
        }
        /*array.addListener && array.addListener(function (event, item) {
         if (event === 'added') {
         var val = array.get(item);
         tree.children[item] = tree.fn(val, item);

         render(node, [tree.children.length > 0 ? tree.$split : '', tree.children[item]], item < tree.children.length - 1 ? tree.children[item + 1].domNode : tree.domNode);
         console.log(event, item, val);
         }

         });*/
    }

    function renderMap(node, tree) {
        tree.domNode = document.createElement('iterator');

        var array = tree.$map;
        if (array.constructor === Function) {
            tree.$map = array = new Atomic(array);
        }
        if (array.constructor === Atomic) {
            renderMapHelper(node, tree, array.get());
            array.addListener(function () {
                renderMapHelper(node, tree, array.get());
            });
        }
        else {
            renderMapHelper(node, tree, array);
        }
        node.appendChild(tree.domNode);
    }

    function walkArray(node, tree) {
        for (var j = 0; j < tree.length; j++) {
            if (tree[j]) {
                render(node, tree[j]);
            }
        }
    }

    function prepareStyleProperty(prop, value) {
        if (value === +value && (prop === 'height' || prop === 'width' || prop === 'top' || prop === 'left')) {
            return value + 'px';
        }
        return value;
    }

    function applyStyle(node, styles) {
        for (var i in styles) {
            if (styles[i].constructor === Function) {
                var atom = new Atomic(styles[i]);
                node.style[i] = prepareStyleProperty(i, atom.get());
                atom.addListener(function (newVal) {
                    node.style[i] = prepareStyleProperty(i, newVal);
                });
            }
            else {
                node.style[i] = prepareStyleProperty(i, styles[i]);
            }
        }
    }

    function applyClassSet(node, cls, classSet) {
        var className = cls;
        for (var i in classSet) {
            var val = classSet[i];
            if (classSet[i].constructor === Function) {
                classSet[i] = new Atomic(classSet[i]);
                classSet[i].addListener(function () {
                    applyClassSet(node, cls, classSet);
                });
            }
            if (classSet[i].constructor === Atomic) {
                val = classSet[i].get();
            }
            if (val) {
                className += ' ' + i;
            }
        }
        node.className = className;
    }

    function renderTag(node, tree, nodeBefore) {

        tree.domNode = document.createElement(tree.tag);
        if (tree.attrs) {
            for (var key in tree.attrs) {
                if (key === "style") {
                    applyStyle(tree.domNode, tree.attrs.style);
                    continue;
                }
                if (key === 'classSet') {
                    applyClassSet(tree.domNode, tree.attrs.className, tree.attrs.classSet);
                    continue;
                }
                /*if (key !== 'onclick' && tree.attrs[key].constructor === Function) {
                 var attrAtom = new Atomic<any>(tree.attrs[key]);
                 tree.domNode[key] = attrAtom.get();
                 attrAtom.addListener(function (key) {
                 tree.domNode[key] = attrAtom.get();
                 }.bind(this, key));
                 continue;
                 }*/
                if (tree.attrs[key].constructor === Atomic) {
                    tree.domNode[key] = tree.attrs[key].get();
                    tree.attrs[key].addListener(function (key) {
                        tree.domNode[key] = tree.attrs[key].get();
                    }.bind(this, key));
                    continue;
                }
                tree.domNode[key] = tree.attrs[key];
            }
        }

        node.insertBefore(tree.domNode, nodeBefore);

        var childrenLen = tree.children.length;
        if (childrenLen == 1 && tree.children[0].constructor !== Array) {
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
                console.log("textNode", textNode);

                tree.domNode.textContent = textNode || '';
                return;
            }
        }

        for (var i = 0; i < childrenLen; i++) {
            render(tree.domNode, tree.children[i]);
        }
    }

    export function render(node, tree, nodeBefore = null) {
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
        if (tree instanceof wrike.Component) {
            render(node, tree.template());
            return;
        }

        text(node, tree, nodeBefore);
    }

    function text(node, text, nodeBefore) {

        var domNode;
        if (text.constructor === Function) {
            var atom = new Atomic<string>(text);
            text.atom = atom;

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

        if (className) {
            if (obj.attrs) {
                obj.attrs.className = className;
            } else {
                obj.attrs = {className: className};
            }
        }
    }

    export function dom(tagExpr:string, attrs?:{[key: string]: any}, ...children:any[]) {
        var obj = {tag: '', domNode: null, attrs: attrs, children: children};
        prepareTag(tagExpr, obj);
        return obj;
    }

    export function map<R>(array:()=>R[], fn:(item:R, n?:number)=>any, split?:string);
    export function map<R>(array:Atomic<R[]>, fn:(item:R, n?:number)=>any, split?:string);
    export function map<R>(array:R[], fn:(item:R, n?:number)=>any, split?:string);
    export function map<R>(array:any, fn:(item:R, n?:number)=>any, split = '') {
        return {tag: 'map', attrs: null, $map: array, $split: split, fn: fn, children: null};
    }

}