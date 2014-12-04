module Arg {

    interface Tree {
        tag: string;
        dom_node?:Node;
        dom_node2?:Node;
        children?: any[];
        fn?: (item:any, i:number)=>any;
        whenFn?: (val:any)=>any;
        $map?: any;
        $split?: string;
        _attrs?:{[key: string]: any};
        when?: any;
    }

    interface Attrs {
        [key: string]: any;
    }

    export interface Component {
        render(): any;
    }

    export interface Listener<T> {
        (event:string, value:T): void;
    }

    interface MapFn<T> {
        (item:T, n?:number): any;
    }

    interface WhenFn {
        (cond:any): any;
    }

    function removeBetween(from:Node, to:Node, included = false) {
        var n:Node;
        var parent = from.parentNode;
        while ((n = from.nextSibling) && n != to) {
            parent.removeChild(n);
        }
        if (included) {
            parent.removeChild(from);
            parent.removeChild(to);
        }
    }

    function renderWhenDOMSet(node:any, condition:any, tree:Tree) {
        removeBetween(tree.dom_node2, tree.dom_node);
        if (condition) {
            render(node, tree.whenFn(condition), tree.dom_node);
        }
    }

    function renderWhen(node:Node, tree:Tree):Tree {
        tree.dom_node = document.createComment("/if");
        tree.dom_node2 = document.createComment("if");
        node.insertBefore(tree.dom_node, null);
        node.insertBefore(tree.dom_node2, tree.dom_node);
        setValue(tree.when, node, tree, renderWhenDOMSet);
        return tree;
    }

    function renderMapHelper(node:Node, tree:Tree, array:any[]) {

        /*
         if (tree.dom_node) {
         while (tree.dom_node.firstChild) {
         tree.dom_node.removeChild(tree.dom_node.firstChild);
         }
         }
         */
        //tree.domNode = document.createDocumentFragment();
        //tree.domNode.appendChild(document.createTextNode('fuck'));

        tree.children = [];
        for (var i = 0; i < array.length; i++) {
            tree.children[i] = tree.fn(array[i], i);
            render(node, tree.children[i], tree.dom_node);
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

    var aaad = 0;

    function renderMapDOMSet(node:any, array:any[], tree:Tree) {
        removeBetween(tree.dom_node2, tree.dom_node);
        if (array) {

            var domNodes:any[] = [];
            var values:any[] = [];
            for (var i = 0; i < array.length; i++) {
                var child_tree = tree.fn(array[i], i);
                render(node, child_tree, tree.dom_node);
                domNodes.push(child_tree.dom_node);
                values.push(array[i]);
            }
            array.addListener(()=> {
                //console.log("array changed");

                aaad++;
                var dom_node = document.createComment("/for" + aaad);
                var dom_node2 = document.createComment("for" + aaad);
                node.insertBefore(dom_node, tree.dom_node.nextSibling); //tree.dom_node.nextSibling
                node.insertBefore(dom_node2, dom_node);

                var _domNodes:any[] = [];
                var _values:any[] = [];
                for (var i = 0; i < array.length; i++) {
                    var index = values.indexOf(array[i]);
                    if (index > -1) {
                        _domNodes[i] = domNodes[index];
                        node.insertBefore(domNodes[index], dom_node);
                    }
                    else {
                        var data = tree.fn(array[i], i);
                        render(node, data, dom_node);
                        _domNodes[i] = data.dom_node;
                    }
                    _values[i] = array[i];
                }
                removeBetween(tree.dom_node2, tree.dom_node, true);
                domNodes = _domNodes;
                values = _values;
                tree.dom_node = dom_node;
                tree.dom_node2 = dom_node2;

            });
        }
    }

    function renderMap(node:Node, tree:Tree):Tree {
        //tree.dom_node = document.createElement('iterator');

        tree.dom_node = document.createComment("/for");
        tree.dom_node2 = document.createComment("for");
        node.insertBefore(tree.dom_node, null);
        node.insertBefore(tree.dom_node2, tree.dom_node);

        /*        var array = tree.$map;
         if (array.constructor === Function) {
         tree.$map = array = new Atom(array);
         }
         if (array.constructor === Atom) {
         renderMapHelper(node, tree, array.val);
         array.addListener(function () {
         renderMapHelper(node, tree, array.val);
         });
         }
         else {
         renderMapHelper(node, tree, array);
         }*/

        setValue(tree.$map, node, tree, renderMapDOMSet);
        return tree;

        //node.appendChild(tree.dom_node);
    }

    function walkArray(node:Node, tree:any):void {
        for (var j = 0; j < tree.length; j++) {
            if (tree[j]) {
                render(node, tree[j]);
            }
        }
    }

    function applyStyleDOMSet(styleNode:any, value:any, prop:string) {
        var val = value;
        if (!isNaN(+val) && (prop === 'height' || prop === 'width' || prop === 'top' || prop === 'left')) {
            val += 'px';
        }
        styleNode[prop] = val;
    }

    function applyStyle(node:HTMLElement, styles:any):void {
        for (var i in styles) {
            setValue(styles[i], node.style, i, applyStyleDOMSet);
        }
    }

    function applyClassSet(node:HTMLElement, cls:string, classSet:{[index: string]: any}, isDeep = false) {

        var className = cls;
        for (var i in classSet) {
            var val = classSet[i];
            if (classSet[i].constructor === Function) {
                classSet[i] = new Atom(classSet[i]);
            }
            if (classSet[i].constructor === Atom) {
                val = classSet[i].get();
                if (!isDeep) {
                    classSet[i].addListener(function () {
                        applyClassSet(node, cls, classSet, true);
                    });
                }
            }
            if (val) {
                className += ' ' + i;
            }
        }

        node.className = className;
    }

    function setValue(value:any, node:any, param1:any, fn:(node:Node, value:any, param1:any)=>void):void {
        if (value.constructor === Function && !value["doNotAtomize"]) {
            value = new Atom<any>(value);
        }
        if (value.constructor === Atom) {
            fn(node, value.get(), param1);
            value.addListener(function () {
                fn(node, value.get(), param1);
            });
        }
        else if (!value.tag) {
            fn(node, value, param1);
        }
        return;
    }

    function renderTagDOMSet(node:Node, val:any) {
        node.textContent = val === void 0 ? '' : val;
    }

    function renderAttrDOMSet(node:any, val:any, key:string) {
        node[key] = val;
    }

    function renderTag(node:HTMLElement, tree:Tree, nodeBefore:Node):Tree {

        tree.dom_node = document.createElement(tree.tag);
        if (tree._attrs) {
            for (var key in tree._attrs) {
                if (tree._attrs[key].constructor === Function && key.substr(0, 2) == "on") {
                    tree._attrs[key]["doNotAtomize"] = true;
                }
                if (key === "style") {
                    applyStyle(<HTMLElement>tree.dom_node, tree._attrs['style']);
                }
                else if (key === 'classSet') {
                    applyClassSet(<HTMLElement>tree.dom_node, tree._attrs['className'], tree._attrs['classSet']);
                }
                // if key == className and not has classSets or anything else
                else if (!tree._attrs['classSet'] || key != 'className') {
                    setValue(tree._attrs[key], tree.dom_node, key, renderAttrDOMSet);
                }
            }
        }

        node.insertBefore(tree.dom_node, nodeBefore);

        var childrenLen = tree.children.length;
        /*
         if (childrenLen == 1 && tree.children[0].constructor !== Array) {
         setValue(tree.children[0], tree.dom_node, null, renderTagDOMSet);
         return;
         }
         */

        for (var i = 0; i < childrenLen; i++) {
            render(tree.dom_node, tree.children[i]);
        }
        return tree;
    }

    function text(node:Node, text:any, nodeBefore:Node):Tree {
        var domNode = document.createTextNode('');
        node.insertBefore(domNode, nodeBefore);
        setValue(text, domNode, null, renderTagDOMSet);
        return {tag: 'text', dom_node: domNode};
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
            if (obj._attrs) {
                obj._attrs['className'] = className;
            } else {
                obj._attrs = {className: className};
            }
        }
    }

    function prepareViewName(name:string) {
        var splits = name.split(/([A-Z][a-z\d_]+)/);
        var words:string[] = [];
        for (var i = 0; i < splits.length; i++) {
            var word = splits[i].toLowerCase();
            if (word && word !== 'view') {
                words.push(word);
            }
        }
        return words.join("-");
    }

    export function render(node:Node, tree:Component, nodeBefore?:Node):Tree;
    export function render(node:Node, tree:Tree[], nodeBefore?:Node):Tree;
    export function render(node:Node, tree:Tree, nodeBefore?:Node):Tree;
    export function render(node:Node, tree:any, nodeBefore:Node = null):Tree {
        if (tree.constructor === Array) {
            walkArray(node, tree);
            return;
        }

        if (tree.$map) {
            return renderMap(node, tree);
        }
        if (tree.tag == 'when') {
            return renderWhen(node, tree);
        }
        if (tree.tag) {
            return renderTag(<HTMLElement>node, tree, nodeBefore);
        }
        if (tree.render) {
            var data = tree.render();
            data.tag = prepareViewName(tree.constructor.name);
            return render(node, data, nodeBefore);
        }

        if (tree.constructor === Atom) {
            var atom = <Atom<any>>tree;
            var sub_tree = render(node, atom.get(), nodeBefore);
            atom.addListener(()=> {
                var _sub_tree = render(node, atom.get(), sub_tree.dom_node);
                sub_tree.dom_node.parentNode.removeChild(sub_tree.dom_node);
                sub_tree = _sub_tree;
            });

            return sub_tree;
        }
        return text(node, tree, nodeBefore);
    }

    export function dom(tagExpr:string, ...children:any[]) {
        var attrs:any;
        if (children[0].constructor === Object && !children[0].tag) {
            attrs = children.shift();
        }
        var obj:Tree = {tag: '', _attrs: attrs, children: children || []};
        prepareTag(tagExpr, obj);
        return obj;
    }

    export module dom {

        export function map<R>(tagExpr:string, array:Atom<any>, fn:MapFn<R>, split?:string):Tree;
        export function map<R>(tagExpr:string, array:any[], fn:MapFn<R>, split?:string):Tree;
        export function map<R>(tagExpr:any, array:any, fn?:any, split?:any):Tree {
            return {tag: 'map', _attrs: null, $map: array || [], $split: split, fn: fn, children: null};
        }

        export function when(condition:any, fn:WhenFn):Tree {
            return {tag: 'when', _attrs: null, when: condition, whenFn: fn, children: null};
        }

        export function root(...children:any[]):Tree {
            return dom('root', children);
        }
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

var d = Arg.dom;


