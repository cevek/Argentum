module Arg {
    export interface IWhenCallback {
        (): ITreeItem;
    }

    export interface ITreeItem {
        whenCondition?:Atom<any[]>;
        whenCallback?: IWhenCallback;
    }

    export function wheeen(condition:any, callback:()=>any):ITreeItem {
        if (condition.constructor !== Atom) {
            condition = new Atom<any>(null, null, condition);
        }
        return new TreeItem({
            type: ITreeType.WHEN,
            whenCondition: condition,
            whenCallback: ()=>convertToTree(callback())
        });
    }

    export function renderWhenDOMSet(node:any, condition:any, tree:ITreeItem) {
        removeTreeChildren(tree);
        if (condition) {
            var sub_tree = tree.whenCallback();
            render(node, sub_tree, tree.node);
            tree.children = [sub_tree];
        }
    }

    export function renderWhen(node:Node, tree:ITreeItem, nodeBefore?:Node) {
        tree.node = document.createComment("/if");
        tree.node2 = document.createComment("if");
        node.insertBefore(tree.node, nodeBefore);
        node.insertBefore(tree.node2, tree.node);
        setValue(tree, tree.whenCondition, node, tree, renderWhenDOMSet);
    }

}