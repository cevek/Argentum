module Arg {

    export interface Component {
        render(): any;
    }

    export interface Listener<T> {
        (event:string, value:T): void;
    }

    interface Tree {
        tag: string;
        dom_node?:Node;
        children: any[];
        fn?: (item:any, i:number)=>any;
        whenFn?: (val:any)=>any;
        $map?: any;
        $split?: string;
        attrs:{[key: string]: any};
        when?: any;

    }

    function renderWhen(node:Node, tree:Tree):void {

        tree.dom_node = document.createComment("if");
        node.insertBefore(tree.dom_node, null);
        if (tree.when.constructor === Function) {
            var atom = new Atom<string>(tree.when);
            //tree.dom_node.textContent = atom.get() || '';
            var condition = atom.get();
            if (condition) {
                render(node, tree.whenFn(condition), tree.dom_node);
            }
            atom.addListener(function (condition) {
                if (condition) {
                    render(node, tree.whenFn(condition), tree.dom_node);
                }
                else {
                    if (tree.dom_node.previousSibling) {
                        tree.dom_node.parentNode.removeChild(tree.dom_node.previousSibling);
                    }
                }
            });
            return;
        }
        if (tree.when) {
            render(node, tree.whenFn(tree.when), tree.dom_node);
        }

    }

    function renderMapHelper(node:Node, tree:Tree, array:any[]) {

        if (tree.dom_node) {
            while (tree.dom_node.firstChild) {
                tree.dom_node.removeChild(tree.dom_node.firstChild);
            }
        }
        //tree.domNode = document.createDocumentFragment();
        //tree.domNode.appendChild(document.createTextNode('fuck'));

        tree.children = [];
        for (var i = 0; i < array.length; i++) {
            tree.children[i] = tree.fn(array[i], i);
            render(tree.dom_node, tree.children[i]);
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

    function renderMap(node:Node, tree:Tree) {
        tree.dom_node = document.createElement('iterator');

        var array = tree.$map;
        if (array.constructor === Function) {
            tree.$map = array = new Atom(array);
        }
        if (array.constructor === Atom) {
            renderMapHelper(node, tree, array.get());
            array.addListener(function () {
                renderMapHelper(node, tree, array.get());
            });
        }
        else {
            renderMapHelper(node, tree, array);
        }
        node.appendChild(tree.dom_node);
    }

    function walkArray(node:Node, tree:Tree[]):void;
    function walkArray(node:Node, tree:Tree):void;
    function walkArray(node:Node, tree:any):void {
        for (var j = 0; j < tree.length; j++) {
            if (tree[j]) {
                render(node, tree[j]);
            }
        }
    }

    function prepareStyleProperty(prop:string, value:string) {
        if (!isNaN(+value) && (prop === 'height' || prop === 'width' || prop === 'top' || prop === 'left')) {
            return value + 'px';
        }
        return value;
    }

    function applyStyle(node:HTMLElement, styles:{[index: string]: ()=>string}):void;
    function applyStyle(node:HTMLElement, styles:{[index: string]: string}):void;
    function applyStyle(node:HTMLElement, styles:any):void {
        for (var i in styles) {
            if (styles[i].constructor === Function) {
                var atom = new Atom<string>(styles[i]);
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

    function applyClassSet(node:HTMLElement, cls:string, classSet:{[index: string]: any}) {
        var className = cls;
        for (var i in classSet) {
            var val = classSet[i];
            if (classSet[i].constructor === Function) {
                classSet[i] = new Atom(classSet[i]);
                classSet[i].addListener(function () {
                    applyClassSet(node, cls, classSet);
                });
            }
            if (classSet[i].constructor === Atom) {
                val = classSet[i].get();
            }
            if (val) {
                className += ' ' + i;
            }
        }
        node.setAttribute('className', className);
    }

    function renderTag(node:HTMLElement, tree:Tree, nodeBefore:Node) {

        tree.dom_node = document.createElement(tree.tag);
        if (tree.attrs) {
            for (var key in tree.attrs) {
                if (key === "style") {
                    applyStyle(<HTMLElement>tree.dom_node, tree.attrs['style']);
                    continue;
                }
                if (key === 'classSet') {
                    applyClassSet(<HTMLElement>tree.dom_node, tree.attrs['className'], tree.attrs['classSet']);
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
                if (tree.attrs[key].constructor === Atom) {
                    (<HTMLElement>tree.dom_node).setAttribute(key, tree.attrs[key].get());
                    tree.attrs[key].addListener(function (key:string) {
                        (<HTMLElement>tree.dom_node).setAttribute(key, tree.attrs[key].get());
                    }.bind(this, key));
                    continue;
                }

                (<HTMLElement>tree.dom_node).setAttribute(key, tree.attrs[key]);
            }
        }

        node.insertBefore(tree.dom_node, nodeBefore);

        var childrenLen = tree.children.length;
        if (childrenLen == 1 && tree.children[0].constructor !== Array) {
            var textNode = tree.children[0];

            if (textNode.constructor === Function) {
                var atom = new Atom<string>(textNode);
                tree.dom_node.textContent = atom.get() || '';

                atom.addListener(function () {
                    tree.dom_node.textContent = atom.get() || '';
                });
                return;
            }

            if (!textNode.tag) {
                console.log("textNode", textNode);

                tree.dom_node.textContent = textNode || '';
                return;
            }
        }

        for (var i = 0; i < childrenLen; i++) {
            render(tree.dom_node, tree.children[i]);
        }
    }

    function text(node:Node, text:()=>string, nodeBefore:Node):void;
    function text(node:Node, text:string, nodeBefore:Node):void;
    function text(node:Node, text:any, nodeBefore:Node):void {
        var domNode:Text;
        if (text.constructor === Function) {
            var atom = new Atom<string>(text);
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

    function prepareTag(tagExpr:string, obj:Tree) {
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
                obj.attrs['className'] = className;
            } else {
                obj.attrs = {className: className};
            }
        }
    }

    export function dom(tagExpr:string, attrs?:{[key: string]: any}, ...children:any[]) {
        var obj:Tree = {tag: '', attrs: attrs, children: children};
        prepareTag(tagExpr, obj);
        return obj;
    }

    export function render(node:Node, tree:Component, nodeBefore?:Node):void;
    export function render(node:Node, tree:Tree[], nodeBefore?:Node):void;
    export function render(node:Node, tree:Tree, nodeBefore?:Node):void;
    export function render(node:Node, tree:any, nodeBefore:Node = null):void {
        if (tree.constructor === Array) {
            walkArray(node, tree);
            return;
        }
        if (tree.$map) {
            renderMap(node, tree);
            return;
        }
        if (tree.tag == 'when') {
            renderWhen(node, tree);
            return;
        }
        if (tree.tag) {
            renderTag(<HTMLElement>node, tree, nodeBefore);
            return;
        }
        if (tree.render) {
            render(node, tree.render());
            return;
        }

        text(node, tree, nodeBefore);
    }

    export function map<R>(array:()=>R[], fn:(item:R, n?:number)=>any, split?:string):Tree;
    export function map<R>(array:Atom<R[]>, fn:(item:R, n?:number)=>any, split?:string):Tree;
    export function map<R>(array:R[], fn:(item:R, n?:number)=>any, split?:string):Tree;
    export function map<R>(array:any, fn:(item:R, n?:number)=>any, split = ''):Tree {
        return {tag: 'map', attrs: null, $map: array || [], $split: split, fn: fn, children: null};
    }

    export function when<R>(val:R, fn:(val:R)=>any):Tree {
        return {tag: 'when', attrs: null, when: val, whenFn: fn, children: null};
    }

    //class AList<T> {
    //    length = 0;
    //
    //    constructor(values?:T[]) {
    //        if (values) {
    //            for (var i = 0; i < values.length; i++) {
    //                this[i] = values[i];
    //            }
    //            this.length = values.length;
    //        }
    //    }
    //
    //    add(value:T) {
    //        this[this.length++] = value;
    //        this.onChange('added', this.length - 1);
    //    }
    //
    //    set set(array:T[]) {
    //        for (var i = 0; i < array.length; i++) {
    //            this[i] = array[i];
    //        }
    //        for (var i = array.length; i < this.length; i++) {
    //            this[i] = null;
    //        }
    //        this.length = array.length;
    //        this.onChange('setted');
    //    }
    //
    //    setItem(item:number, value:T) {
    //        this[item] = value;
    //        if (this.length < item) {
    //            this.length = item + 1;
    //        }
    //        this.onChange('updated', item);
    //    }
    //
    //    push(value:T) {
    //        this[this.length++] = value;
    //        this.onChange('added', this.length - 1);
    //    }
    //
    //    get(item:number):T {
    //        return this[item];
    //    }
    //
    //    remove(item:number) {
    //
    //    }
    //
    //    splice() {
    //
    //    }
    //
    //    slice() {
    //    }
    //
    //    map(fn:(val:T, item:number)=>any, split?:any) {
    //        var newArray = [];
    //        for (var i = 0, len = this.length; i < len; i++) {
    //            newArray.push(fn(this[i], i));
    //            if (split && i + 1 < len) {
    //                newArray.push(split);
    //            }
    //        }
    //        return newArray;
    //    }
    //
    //    private onChange(event:string, item?:number) {
    //        for (var i = 0; i < this.listeners.length; i++) {
    //            if (this.listeners[i]) {
    //                this.listeners[i](event, item);
    //            }
    //        }
    //    }
    //
    //    private listeners:Listener<T>[] = [];
    //
    //    addListener(fn:(event:string, value:T)=>void) {
    //        var id = this.listeners.length;
    //        this.listeners.push(fn);
    //    }
    //
    //    removeListener(fn:(event:string, value:T)=>void) {
    //        var index = this.listeners.indexOf(fn);
    //        if (index > -1) {
    //            this.listeners.splice(index, 1);
    //        }
    //    }
    //
    //}

}
