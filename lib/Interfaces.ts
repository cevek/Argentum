module Arg {
    export interface ITreeItem {
        type: TreeType;
        tag?: string;
        value?: TreeItem;
        atom?: Atom<any>;
        component?: Component;
        attrs?: Attrs;
        children?:TreeItem[];
        node?:Node;
        node2?:Node;
        atoms?:Atom<any>[];

        mapIterator?:IMapIterator<any>;
        map?:Atom<any[]>;
        mapSplit?:string;
        mapValues?: any[];

        whenCondition?:Atom<any[]>;
        whenCallback?: IWhenCallback;

        [idx: string]: any;
    }
    export class TreeItem {
    [idx: string]: any;
        type:TreeType;
        tag:string;
        value:TreeItem;
        atom:Atom<any>;
        component:Component;
        attrs:Attrs;
        children:TreeItem[];
        node:Node;
        node2:Node;



        atoms:Atom<any>[];
        removed: boolean;

        mapIterator:IMapIterator<any>;
        map:Atom<any[]>;
        mapSplit:string;
        mapValues:any[];

        whenCallback:IWhenCallback;
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
    }

    export enum TreeType{
        TAG, MAP, WHEN, COMPONENT, TEXT
    }

    export interface Attrs {
        [key: string]: any;
    }

    export interface Component {
        componentWillMount?(): void;
        componentDidMount?(node:HTMLElement): void;
        componentWillUnmount?(): void;
        domNode?: HTMLElement;
        render(): any;
    }

    export interface Listener<T> {
        (event:string, value:T): void;
    }

    export interface WhenFn {
        (cond:any): any;
    }

}