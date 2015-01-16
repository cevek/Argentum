module ag{
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
}