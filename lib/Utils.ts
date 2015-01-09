module Arg {

    export function traverseTree(startTree:TreeItem, callback:(tree:TreeItem)=>any) {
        if (startTree.children) {
            for (var i = 0; i < startTree.children.length; i++) {
                callback(startTree.children[i]);
                traverseTree(startTree.children[i], callback);
            }
        }
    }

    export function removeTreeChildren(tree:TreeItem) {
        if (tree && tree.children) {
            for (var i = 0; i < tree.children.length; i++) {
                removeTree(tree.children[i], true);
            }
            tree.children = null;
        }
    }

    //TODO: remove only Arg and this component atoms
    export function removeTree(tree:TreeItem, isRoot = false) {
        if (!tree) {
            return;
        }

        if (tree.attrs && tree.attrs.animation) {
            console.log(tree);
        }

        if (tree.children) {
            for (var i = 0; i < tree.children.length; i++) {
                removeTree(tree.children[i]);
            }
            tree.children = null;
        }

        tree.removed = true;
        if (tree.node) {
            if (isRoot) {
                //todo: remove component html listeners before
                if (tree.attrs && tree.attrs.animation && tree.type == TreeType.TAG) {
                    //console.log("Run animation leave");
                    var animationClass = tree.attrs.animation;
                    var node = <HTMLElement>tree.node;
                    node.className = node.className || '';
                    node.className = node.className.replace(' arg-enter', '');
                    node.className = node.className.replace(' arg-enter-active', '');
                    node.className += ' ' + animationClass + ' arg-leave';
                    //noinspection BadExpressionStatementJS
                    node.offsetHeight; // reflow
                    node.className += ' arg-leave-active';
                    var parentNode = tree.parentNode;
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
                                //console.log("Animation leave end");
                                node.className = node.className.replace(' ' + animationClass + ' arg-leave arg-leave-active', '');
                                node.removeEventListener('transitionend', callback);
                                parentNode.removeChild(node);
                            }
                        };
                        node.addEventListener('transitionend', callback)
                    }
                    else {
                        node.className = node.className.replace(' ' + animationClass + ' arg-leave', '');
                        parentNode.removeChild(node);
                    }
                }
                else {
                    tree.node.parentNode.removeChild(tree.node);
                }
            }

            if (tree.attrs){
                for (var key in tree.attrs){
                    if (key.substr(0,2) === 'on'){
                        tree.node[key] = null;
                    }
                }
            }
            tree.node = null;
        }
        tree.nodeBefore = null;
        tree.parentNode = null;

        if (tree.attrs && tree.attrs.self && tree.attrs.self.constructor === Atom) {
            tree.attrs.self.setNull();
        }
        tree.attrs = null;

        if (tree.attrsAtoms) {
            for (var key in tree.attrsAtoms) {
                tree.attrsAtoms[key].destroy();
            }
            tree.attrsAtoms = null;
        }

        if (tree.styleAtoms) {
            for (var key in tree.styleAtoms) {
                tree.styleAtoms[key].destroy();
            }
            tree.styleAtoms = null;
        }

        if (tree.classSetAtoms) {
            for (var key in tree.classSetAtoms) {
                tree.classSetAtoms[key].destroy();
            }
            tree.classSetAtoms = null;
        }

        tree.mapValues = null;
        tree.mapIterator = null;

        if (tree.map) {
            //tree.map.get().listeners = null;
            tree.map.destroy();
            tree.map = null;
        }

        tree.whenCallback = null;
        if (tree.whenCondition) {
            tree.whenCondition.destroy();
            tree.whenCondition = null;
        }

        if (tree.component) {
            if (tree.component.atoms) {
                //console.log(tree.component.atoms);

                for (var i = 0; i < tree.component.atoms.length; i++) {
                    tree.component.atoms[i].destroy();
                }
            }
            if (tree.component.listeners) {
                //console.log(tree.component.listeners);

                for (var i = 0; i < tree.component.listeners.length; i++) {
                    tree.component.listeners[i].atom.removeListener(tree.component.listeners[i].callback, tree.component.listeners[i].thisArg);
                }
            }
            tree.component.componentWillUnmount && tree.component.componentWillUnmount();
            tree.component = null;
        }
    }

    export function convertToTree(val:any):TreeItem {
        if (val) {
            var constructor = val.constructor;
            if (constructor === Function) {
                var getter:IAtomGetter<any> = val;
                val = new Atom<any>(Arg, {getter: getter, name: 'atom'});
                constructor = Atom;
            }
            if (constructor === Atom) {
                var atom:Atom<any> = val;
                var child = atom.get();
                return new TreeItem({
                    type: TreeType.ATOM,
                    whenCondition: atom,
                    children: child ? [child] : null,
                    atom: atom
                });
            }
            if (constructor === TreeItem) {
                return val;
            }
            if (val.render) {
                var treeItem = convertToTree(val.render());
                treeItem.tag = treeItem.tag || prepareViewName(val.constructor.name);
                treeItem.type = TreeType.TAG;
                treeItem.component = val;
                return treeItem;
            }
        }
        return new TreeItem({type: TreeType.TEXT, value: val});
    }

    export function prepareViewName(name:string) {
        var splits = name.split(/([A-Z][a-z\d_]+)/);
        var words:string[] = [];
        for (var i = 0; i < splits.length; i++) {
            var word = splits[i].toLowerCase();
            if (word && word !== 'view' && word !== 'v') {
                words.push(word);
            }
        }
        return words.join("-");
    }

    export function parseTagExpr(tagExpr:string, tree:TreeItem):TreeItem {
        var className = '';
        var lastDot = -1;
        var len = tagExpr.length;
        for (var i = 0; i < len + 1; i++) {
            if (i === len || tagExpr[i] === '.') {
                if (lastDot == -1) {
                    tree.tag = tagExpr.substring(0, i);
                }
                else {
                    className += tagExpr.substring(lastDot + 1, i);
                    if (i != len) {
                        className += ' ';
                    }
                }
                lastDot = i;
            }
        }

        if (className) {
            if (tree.attrs) {
                if (!tree.attrs['className']) {
                    tree.attrs['className'] = className;
                    tree.attrs['baseClassName'] = className;
                }
            } else {
                tree.attrs = {className: className, baseClassName: className};
            }
        }
        else {
            if (tree.attrs && tree.attrs['className']) {
                tree.attrs['baseClassName'] = tree.attrs['className'];
            }

        }

        prepareAttrs(tree);
        return tree;
    }

    export function log(param:any) {
        console.log(param);
        return param;
    }
}