module ag{
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

        mapIterator?:IMapIterator<any>;
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

        mapIterator:IMapIterator<any>;
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
                    this.children[i] = convertToTree(this.children[i]);
                }
            }
        }

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

            tree.removed = true;
            if (tree.node) {
                if (isRoot) {
                    animate(tree, true);
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

            if (tree.attrs && tree.attrs.self && tree.attrs.self.constructor === Atom) {
                tree.attrs.self.setNull();
            }
            tree.attrs = null;

            if (tree.attrsAtoms) {
                for (var key in tree.attrsAtoms) {
                    tree.attrsAtoms[key].destroy();
                }
                tree.attrsAtoms = null;
            }

            if (tree.styleAtoms) {
                for (var key in tree.styleAtoms) {
                    tree.styleAtoms[key].destroy();
                }
                tree.styleAtoms = null;
            }

            if (tree.classSetAtoms) {
                for (var key in tree.classSetAtoms) {
                    tree.classSetAtoms[key].destroy();
                }
                tree.classSetAtoms = null;
            }

            tree.mapValues = null;
            tree.mapIterator = null;

            if (tree.map) {
                //tree.map.get().listeners = null;
                tree.map.destroy();
                tree.map = null;
            }

            tree.whenCallback = null;
            if (tree.whenCondition) {
                tree.whenCondition.destroy();
                tree.whenCondition = null;
            }

            if (tree.component) {
                if (tree.component.atoms) {
                    //console.log(tree.component.atoms);

                    for (var i = 0; i < tree.component.atoms.length; i++) {
                        tree.component.atoms[i].destroy();
                    }
                }
                if (tree.component.listeners) {
                    //console.log(tree.component.listeners);

                    for (var i = 0; i < tree.component.listeners.length; i++) {
                        tree.component.listeners[i].atom.removeListener(tree.component.listeners[i].callback, tree.component.listeners[i].thisArg);
                    }
                }
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
    }

    export enum TreeType{
        TAG, MAP, WHEN, COMPONENT, TEXT, ATOM
    }

}