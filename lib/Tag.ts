module Arg {

    export function renderTag(tree:TreeItem) {
        tree.node = document.createElement(tree.tag);
        renderAttrs(tree);

        tree.parentNode.insertBefore(tree.node, tree.nodeBefore);
        if (tree.children) {
            for (var i = 0; i < tree.children.length; i++) {
                tree.children[i].parentNode = tree.node;
                render(tree.children[i]);
            }
        }
    }

    export function renderText(tree:TreeItem) {
        var domNode = document.createTextNode('');
        tree.parentNode.insertBefore(domNode, tree.nodeBefore);
        tree.node = domNode;
        setValue(tree, tree.value, domNode, null, (node:Node, val:any) => {
            node.textContent = val === void 0 ? '' : val;
        });
    }
}