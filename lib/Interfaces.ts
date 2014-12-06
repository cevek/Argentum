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

        mapIterator:IMapIterator<any>;
        map:Atom<any[]>;
        mapSplit:string;
        mapValues: any[];

        whenCallback:IWhenCallback;
        whenCondition:Atom<any>;

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

            data.mapIterator ? this.mapIterator = data.mapIterator : null;
            data.map ? this.map = data.map : null;
            data.mapSplit ? this.mapSplit = data.mapSplit : null;
            data.mapValues ? this.mapValues = data.mapValues : null;

            data.whenCallback ? this.whenCallback = data.whenCallback : null;
            data.whenCondition ? this.whenCondition = data.whenCondition : null;

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