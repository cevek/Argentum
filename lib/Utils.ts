module Arg {

    export function removeTreeChildren(tree:TreeItem) {
        if (tree && tree.children) {
            for (var i = 0; i < tree.children.length; i++) {
                removeTree(tree.children[i]);
            }
        }
    }

    export function removeAtom(atom:Atom<any>) {
        atom.listeners = null;
        atom.masters = null;
    }

    export function removeTree(tree:TreeItem) {
        if (!tree) {
            return;
        }
        if (tree.children) {
            for (var i = 0; i < tree.children.length; i++) {
                removeTree(tree.children[i]);
            }
            tree.children = null;
        }

        tree.removed = true;
        if (tree.node) {
            tree.node.parentNode.removeChild(tree.node);
            tree.node = null;
        }
        tree.nodeBefore = null;
        tree.parentNode = null;
        tree.attrs = null;

        if (tree.attrsAtoms) {
            for (var key in tree.attrsAtoms) {
                removeAtom(tree.attrsAtoms[key])
            }
            tree.attrsAtoms = null;
        }

        if (tree.styleAtoms) {
            for (var key in tree.styleAtoms) {
                removeAtom(tree.styleAtoms[key])
            }
            tree.styleAtoms = null;
        }

        if (tree.classSetAtoms) {
            for (var key in tree.classSetAtoms) {
                removeAtom(tree.classSetAtoms[key])
            }
            tree.classSetAtoms = null;
        }

        tree.mapValues = null;
        tree.mapIterator = null;

        if (tree.map) {
            //tree.map.get().listeners = null;
            removeAtom(tree.map);
            tree.map = null;
        }

        tree.whenCallback = null;
        if (tree.whenCondition) {
            removeAtom(tree.whenCondition)
            tree.whenCondition = null;
        }

        if (tree.component) {
            tree.component.componentWillUnmount && tree.component.componentWillUnmount();
            tree.component = null;
        }
    }

    export function convertToTree(val:any):TreeItem {
        if (val) {
            var constructor = val.constructor;
            if (constructor === Function) {
                val = new Atom<any>(val);
            }
            if (constructor === Atom) {
                var atom:Atom<any> = val;
                var whenCallback = ()=>convertToTree(atom.get());
                var child = whenCallback();
                return new TreeItem({
                    type: TreeType.WHEN,
                    whenCondition: atom,
                    children: child ? [child] : null,
                    whenCallback: whenCallback
                });
            }
            if (constructor === TreeItem) {
                return val;
            }
            if (val.render) {
                var treeItem = val.render();
                treeItem.tag = prepareViewName(val.constructor.name);
                treeItem.type = TreeType.TAG;
                treeItem.component = val;
                return new TreeItem(treeItem);
            }
        }
        return new TreeItem({type: TreeType.TEXT, value: val});
    }

    export function prepareViewName(name:string) {
        var splits = name.split(/([A-Z][a-z\d_]+)/);
        var words:string[] = [];
        for (var i = 0; i < splits.length; i++) {
            var word = splits[i].toLowerCase();
            if (word && word !== 'view') {
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

        prepareAttrs(tree);
        return tree;
    }
}