module Arg {
    export interface ITreeItem {
        type: ITreeType;
        tag?: string;
        value?: TreeItem;
        atom?: Atom<any>;
        component?: Component;
        attrs?: Attrs;
        children?:ITreeItem[];
        node?:Node;
        node2?:Node;
        atoms?:Atom<any>[];
    }
    export class TreeItem implements ITreeItem {
        type:ITreeType;
        tag:string;
        value:TreeItem;
        atom:Atom<any>;
        component:Component;
        attrs:Attrs;
        children:ITreeItem[];
        node:Node;
        node2:Node;
        atoms:Atom<any>[];

        constructor(data:ITreeItem) {
            this.type = data.type;
            data.tag ? this.tag = data.tag : null;
            data.value ? this.value = data.value : null;
            data.atom ? this.atom = data.atom : null;
            data.component ? this.component = data.component : null;
            data.attrs ? this.attrs = data.attrs : null;
            data.children ? this.children = data.children : null;
            data.node ? this.node = data.node : null;
            data.node2 ? this.node2 = data.node2 : null;
            data.atoms ? this.atoms = data.atoms : null;
            if (data.children) {
                for (var i = 0; i < data.children.length; i++) {
                    data.children[i] = convertToTree(data.children[i]);
                }
            }
        }
    }

    export enum ITreeType{
        TAG, MAP, WHEN, COMPONENT, TEXT
    }

    export interface Tree {
        type?: ITreeType;
        tag: string;
        node?:Node;
        node2?:Node;
        children?: any[];
        fn?: (item:any, i:number)=>any;
        whenFn?: (val:any)=>any;
        $map?: any;
        $split?: string;
        attrs?:{[key: string]: any};
        when?: any;
        removed?: boolean;
        atoms?: Atom<any>[];
        component?: Component;
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

    export interface MapFn<T> {
        (item:T, n?:number): any;
    }

    export interface WhenFn {
        (cond:any): any;
    }

}