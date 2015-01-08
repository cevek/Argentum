module Arg {

    export function renderTag(tree:TreeItem) {
        //todo: do it to all cases
        if (tree.component && tree.component.componentWillMount) {
            tree.component.componentWillMount();
        }

        tree.node = document.createElement(tree.tag || 'div');
        if (tree.component) {
        }
        renderAttrs(tree);

        tree.parentNode.insertBefore(tree.node, tree.nodeBefore);
        if (tree.attrs && tree.attrs.animation && tree.type == TreeType.TAG) {
            //console.log("Run animation enter");
            var animationClass = tree.attrs.animation;
            var node = <HTMLElement>tree.node;
            node.className = node.className || '';
            node.className += ' ' + animationClass + ' enter';
            var style = window.getComputedStyle(node);
            //noinspection BadExpressionStatementJS
            style.width;//reflow
            node.className += ' enter-active';
            if (parseFloat(style.transitionDuration)) {
                var callback = ()=> {
                    //console.log("Animation enter end");
                    node.className = node.className.replace(' ' + animationClass + ' enter enter-active', '');
                    node.removeEventListener('transitionend', callback);
                };
                node.addEventListener('transitionend', callback)
            }
            else {
                node.className = node.className.replace(' ' + animationClass + ' enter', '');
            }
        }

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