module Arg {

    export function renderTag(tree:TreeItem) {
        tree.node = document.createElement(tree.tag);
        if (tree.component){
            tree.component.domNode = tree.node;
        }
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
        tree.node['textContent'] = tree.value === void 0 ? '' : tree.value;
    }
}