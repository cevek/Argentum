module ag{
    export function animate(tree:TreeItem, isLeave:boolean) {
        var enterClass = 'ag-enter';
        var leaveClass = 'ag-leave';

        var cls = isLeave ? leaveClass : enterClass;
        var activeCls = cls + '-active';

        var unCls = isLeave ? enterClass : leaveClass;
        var unActiveCls = unCls + '-active';

        if (tree.attrs && tree.attrs.animation && tree.type == TreeType.TAG) {
            //console.log("Run animation leave");
            var animationClass = tree.attrs.animation;
            var node = <HTMLElement>tree.node;
            node.className = (node.className || '').split(' ')
                .filter(cl => cl !== animationClass && cl !== unCls && cl !== unActiveCls).join(' ');
            //node.offsetHeight; // reflow

            node.className += ' ' + animationClass;
            node.className += ' ' + cls;
            //noinspection BadExpressionStatementJS
            node.offsetHeight; // reflow
            node.className += ' ' + activeCls;
            var parentNode = tree.parentNode;
            var style = window.getComputedStyle(node);
            var props = style.transitionProperty.split(', ');
            var durs = style.transitionDuration.split(', ');
            var delays = style.transitionDelay.split(', ');
            var maxDur = 0;
            var prop = '';
            for (var i = 0; i < props.length; i++) {
                var dur = parseFloat(durs[i]) + parseFloat(delays[i]);
                if (dur > maxDur) {
                    maxDur = dur;
                    prop = props[i];
                }
            }
            //console.log(style.transitionDuration, style.transitionProperty, style.transitionDelay);

            if (maxDur > 0) {
                var callback = (e:TransitionEvent)=> {
                    if (timeout && !e || e.propertyName === prop) {
                        if (!e) {
                            console.error("animation '" + cls + "' timeout", tree);
                        }
                        clearTimeout(timeout);
                        timeout = null;
                        console.log("Animation " + cls + " end");
                        node.className = node.className.split(' ').filter(
                                cl => cl !== animationClass && cl !== cls && cl !== activeCls).join(' ');
                        node.removeEventListener('transitionend', callback);
                        if (isLeave) {
                            parentNode.removeChild(node);
                        }
                        tree.activeAnimation = null;
                    }
                };
                if (tree.activeAnimation){
                    clearTimeout(tree.activeAnimation.timeout);
                    tree.activeAnimation.node.removeEventListener('transitionend', tree.activeAnimation.callback);
                }
                var timeout = setTimeout(callback, maxDur * 1100);
                node.addEventListener('transitionend', callback);
                tree.activeAnimation = {callback: callback, timeout: timeout, cls: cls, node: node};
            }
            else {
                console.log("dur 0");
                node.className = node.className.split(' ').filter(
                        cl => cl !== animationClass && cl !== cls && cl !== activeCls).join(' ');
                if (isLeave) {
                    parentNode.removeChild(node);
                }
            }
        }
        else if (isLeave) {
            tree.node.parentNode.removeChild(tree.node);
        }
    }

}