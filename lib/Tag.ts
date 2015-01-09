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
            node.className += ' ' + animationClass + ' arg-enter';
            //noinspection BadExpressionStatementJS
            node.offsetHeight;//reflow
            node.className += ' arg-enter-active';
            var style = window.getComputedStyle(node);

            var props = style.transitionProperty.split(', ');
            var durs = style.transitionDuration.split(', ');
            var delays = style.transitionDelay.split(', ');
            var maxDur = 0;
            var prop = '';
            for (var i = 0; i < props.length; i++) {
                var dur = parseFloat(durs[i]) + parseFloat(delays[i]);
                if (dur > maxDur){
                    maxDur = dur;
                    prop = props[i];
                }
            }
            //console.log(style.transitionDuration, style.transitionProperty, style.transitionDelay);
            //console.log(maxDur, prop);
            if (maxDur > 0) {
                var callback = (e: TransitionEvent)=> {
                    if (e.propertyName === prop) {
                        //console.log("Animation enter end");
                        node.className = node.className.replace(' ' + animationClass + ' arg-enter arg-enter-active', '');
                        node.removeEventListener('transitionend', callback);
                    }
                };
                node.addEventListener('transitionend', callback)
            }
            else {
                node.className = node.className.replace(' ' + animationClass + ' arg-enter', '');
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