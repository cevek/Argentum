module Arg {
    export function renderWhenDOMSet(node:any, condition:any, tree:Tree) {
        //removeBetween(tree.node2, tree.node);
        removeTree(tree.children);
        if (condition) {
            var sub_tree = render(node, tree.whenFn(condition), tree.node);
        }
        tree.children = [sub_tree];
    }

    export function renderWhen(node:Node, tree:ITreeItem):ITreeItem {
        tree.node = document.createComment("/if");
        tree.node2 = document.createComment("if");
        node.insertBefore(tree.node, null);
        node.insertBefore(tree.node2, tree.node);
        setValue(tree, tree.when, node, tree, renderWhenDOMSet);
        return tree;
    }

}