module ag {
    export interface ITreeItem {
        [idx: string]: any;
        type:TreeType;
        tag?:string;
        value?:string;
        component?:Component;
        attrs?:Attrs;
        attrsAtoms?:{[idx: string]: Atom<any>};
        styleAtoms?:{[idx: string]: Atom<any>};
        classSetAtoms?:{[idx: string]: Atom<any>};
        children?:any[];
        node?:Node;
        parentNode?:Node;
        nodeBefore?:Node;

        removed?:boolean;

        mapIterator?:internal.IMapIterator<any>;
        map?:Atom<any[]>;
        mapSplit?:string;
        mapValues?:any[];

        atom?:Atom<any>;
        whenCallback?:()=>any;
        whenCondition?:Atom<any>;
    }
    export class TreeItem {
    [idx: string]: any;
        type:TreeType;
        tag:string;
        value:string;
        componentTag:string;
        component:Component;
        attrs:Attrs;
        attrsAtoms:{[idx: string]: Atom<any>};
        styleAtoms:{[idx: string]: Atom<any>};
        classSetAtoms:{[idx: string]: Atom<any>};
        children:TreeItem[];
        node:Node;
        parentNode:Node;
        nodeBefore:Node;
        parentTree:TreeItem;
        activeAnimation:{callback: (e:TransitionEvent)=>void; timeout: number; cls: string};

        removed:boolean;

        mapIterator:internal.IMapIterator<any>;
        map:Atom<any[]>;
        mapSplit:string;
        mapValues:any[];

        atom:Atom<any>;
        whenCallback:()=>any;
        whenCondition:Atom<any>;

        constructor(data:ITreeItem) {
            for (var key in data) {
                if (data[key] !== void 0) {
                    this[key] = data[key];
                }
            }
            if (this.children) {
                for (var i = 0; i < this.children.length; i++) {
                    this.children[i] = TreeItem.convertToTree(this.children[i]);
                }
            }
        }

        destroyOwnAtom(atom:Atom<any>) {
            for (var i = 0; i < atom.listeners.length; i++) {
                var listener = atom.listeners[i];
                if (listener.thisArg === this) {
                    atom.removeListener(listener.callback, this);
                }
                if (this.component && atom.owner == this.component && listener.thisArg === this) {
                    atom.removeListener(listener.callback, this.component);
                }
            }
            if (atom.owner === ag || (this.component && atom.owner == this.component)) {
                atom.destroy();
            }
        }

        flatChildren:TreeItem[] = [];

        //TODO: remove only ag and this component atoms
        destroy(isRoot = false) {
            var tree = this;
            if (!tree) {
                return;
            }

            if (tree.children) {
                for (var i = 0; i < tree.children.length; i++) {
                    tree.children[i].destroy();
                }
                tree.children = null;
            }

            if (this.parentTree) {
                var pos = this.parentTree.flatChildren.indexOf(this);
                if (pos > -1) {
                    this.parentTree.flatChildren.splice(pos, 1);
                }
            }
            this.flatChildren = null;


            tree.removed = true;
            if (tree.node) {
                if (isRoot) {
                    internal.animate(tree, true);
                }

                if (tree.attrs) {
                    for (var key in tree.attrs) {
                        if (key.substr(0, 2) === 'on') {
                            (<any>tree.node)[key] = null;
                        }
                    }
                }
                tree.node = null;
            }
            tree.nodeBefore = null;
            tree.parentNode = null;
            tree.parentTree = null;

            if (tree.attrs && tree.attrs.self && tree.attrs.self instanceof Atom) {
                tree.attrs.self.setNull();
            }
            tree.attrs = null;

            if (tree.attrsAtoms) {
                for (var key in tree.attrsAtoms) {
                    this.destroyOwnAtom(tree.attrsAtoms[key]);
                }
                tree.attrsAtoms = null;
            }

            if (tree.styleAtoms) {
                for (var key in tree.styleAtoms) {
                    this.destroyOwnAtom(tree.styleAtoms[key]);
                }
                tree.styleAtoms = null;
            }

            if (tree.classSetAtoms) {
                for (var key in tree.classSetAtoms) {
                    this.destroyOwnAtom(tree.classSetAtoms[key]);
                }
                tree.classSetAtoms = null;
            }

            tree.mapValues = null;
            tree.mapIterator = null;

            if (tree.map) {
                //tree.map.get().listeners = null;
                this.destroyOwnAtom(tree.map);
                tree.map = null;
            }

            tree.whenCallback = null;
            if (tree.whenCondition) {
                this.destroyOwnAtom(tree.whenCondition);
                tree.whenCondition = null;
            }

            if (tree.component) {
                if (tree.component.atoms) {
                    //console.log(tree.component.atoms);

                    for (var i = 0; i < tree.component.atoms.length; i++) {
                        this.destroyOwnAtom(tree.component.atoms[i]);
                    }
                }
                /*if (tree.component.listeners) {
                    //console.log(tree.component.listeners);

                    for (var i = 0; i < tree.component.listeners.length; i++) {
                        tree.component.listeners[i].atom.removeListener(tree.component.listeners[i].callback, tree.component.listeners[i].thisArg);
                    }
                }*/
                tree.component.componentWillUnmount && tree.component.componentWillUnmount();
                tree.component = null;
            }
        }

        toJSON() {
            var obj:any = {};
            for (var i in this) {
                if (this[i] instanceof Node) {
                    obj[i] = '<DOMNode>';
                }
                else {
                    obj[i] = this[i];
                }
            }
            return obj;
        }

        static convertToTree(val:any):TreeItem {
            if (val) {
                var constructor = val.constructor;
                if (constructor === Function) {
                    var getter:IAtomGetter<any> = val;
                    val = new Atom<any>(ag, getter, {name: 'atom'});
                    constructor = Atom;
                }
                if (val instanceof Atom) {
                    var atom:Atom<any> = val;
                    var child = atom.get();
                    return new TreeItem({
                        type: TreeType.ATOM,
                        whenCondition: atom,
                        atom: atom
                    });
                }
                if (constructor === TreeItem) {
                    return val;
                }
                if (val.render) {
                    var treeItem = TreeItem.convertToTree(val.render());
                    treeItem.componentTag = prepareViewName(val.constructor.name);
                    treeItem.tag = treeItem.tag || treeItem.componentTag;
                    treeItem.type = TreeType.TAG;
                    treeItem.component = val;
                    treeItem.component.tree = treeItem;
                    return treeItem;
                }
            }
            return new TreeItem({type: TreeType.TEXT, value: val});
        }

        removeChildren() {
            var tree = this;
            if (tree && tree.children) {
                for (var i = 0; i < tree.children.length; i++) {
                    tree.children[i].destroy(true);
                }
                tree.children = null;
            }
        }

        parseTagExpr(tagExpr:string):TreeItem {
            var tree = this;
            var className = '';
            var lastDot = -1;
            var len = tagExpr.length;
            for (var i = 0; i < len + 1; i++) {
                if (i === len || tagExpr[i] === '.') {
                    if (lastDot == -1) {
                        tree.tag = tagExpr.substring(0, i);
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
                if (tree.attrs) {
                    if (!tree.attrs.className) {
                        tree.attrs.className = className;
                        tree.attrs.baseClassName = className;
                    }
                } else {
                    tree.attrs = {className: className, baseClassName: className};
                }
            }
            else {
                if (tree.attrs && tree.attrs.className) {
                    tree.attrs.baseClassName = tree.attrs.className;
                }

            }

            return tree;
        }

    }

    export enum TreeType{
        TAG = <any>'tag',
        MAP = <any>'map',
        WHEN = <any>'when',
        TEXT = <any>'text',
        ATOM = <any>'atom'
    }

}