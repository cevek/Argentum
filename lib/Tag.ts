module ag {

    export function renderTag(tree:TreeItem) {
        //todo: do it to all cases
        if (tree.component && tree.component.componentWillMount) {
            tree.component.componentWillMount();
        }

        tree.node = document.createElement(tree.tag || 'div');
        (<any>tree.node).tree = tree;
        if (tree.component) {
        }

        prepareAttrs(tree);
        renderAttrs(tree);

        tree.parentNode.insertBefore(tree.node, tree.nodeBefore);
        animate(tree, false);

        if (tree.children) {
            for (var i = 0; i < tree.children.length; i++) {
                tree.children[i].parentNode = tree.node;
                tree.children[i].parentTree = tree;
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
        (<any>domNode).tree = tree;
        tree.parentNode.insertBefore(domNode, tree.nodeBefore);
        tree.node = domNode;
        domNode.textContent = tree.value === void 0 ? '' : tree.value;
    }

    export function renderTextContent(value:string, tree:TreeItem) {
        tree.node.textContent = value;
    }
}