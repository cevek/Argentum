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
        children?:TreeItem[];
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

        destroy() {
            removeTree(this, true);
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

    export interface Component {
        componentWillMount?(): void;
        componentDidMount?(node:HTMLElement): void;
        componentWillUnmount?(): void;
        domNode?: Node;
        tree?: TreeItem;
        isBlock?: boolean;
        render(): any;
        atoms?: Atom<any>[];
        listeners?: AtomListeners<Object,Object,Object,Object>[];
    }

    export interface Listener<T> {
        (event:string, value:T): void;
    }

    export interface WhenFn {
        (cond:any): any;
    }

}
interface Node {
    [idx: string]: any;
}
interface StyleSheet {
    insertRule(selector:string, index?:number): void;
}
interface Window {
    [idx:string]:any;
}
