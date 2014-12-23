module Arg {

    export function renderTag(tree:TreeItem) {
        //todo: do it to all cases
        if (tree.component && tree.component.componentWillMount) {
            tree.component.componentWillMount();
        }
        if (tree.tag == 'select') {
            console.log(tree);
        }

        tree.node = document.createElement(tree.tag || 'div');
        if (tree.component) {
        }
        renderAttrs(tree);

        tree.parentNode.insertBefore(tree.node, tree.nodeBefore);
        if (tree.children) {
            for (var i = 0; i < tree.children.length; i++) {
                tree.children[i].parentNode = tree.node;
                render(tree.children[i]);
            }
        }
        if (tree.component && tree.component.componentDidMount) {
            tree.component.domNode = tree.node;
            tree.component.tree = tree;
            tree.component.componentDidMount(<HTMLElement>tree.node);
        }
    }

    export function renderText(tree:TreeItem) {
        var domNode = document.createTextNode('');
        tree.parentNode.insertBefore(domNode, tree.nodeBefore);
        tree.node = domNode;
        tree.node['textContent'] = tree.value === void 0 ? '' : tree.value;
    }
}