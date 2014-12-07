module Arg {

    export function removeTreeChildren(tree:TreeItem) {
        if (tree && tree.children) {
            for (var i = 0; i < tree.children.length; i++) {
                removeTree(tree.children[i]);
            }
        }
    }

    export function removeTree(tree:TreeItem) {
        if (!tree) {
            return;
        }
        if (tree.children) {
            for (var i = 0; i < tree.children.length; i++) {
                removeTree(tree.children[i]);
            }
            tree.children = [];
        }

        tree.removed = true;
        if (tree.node) {
            tree.node.parentNode.removeChild(tree.node);
            tree.node = null;
        }

        if (tree.map) {
            if (tree.map.constructor === Atom) {
                tree.map.listeners = null;
                tree.map.get().listeners = null;
                tree.map = null;
            }
        }

        if (tree.whenCondition) {
            //todo: atom.computing
            /*var atom = tree.whenCondition;
            atom.listeners = null;
            if (atom.masters) {
                for (var j in atom.masters) {
                    if (atom.masters[j].slaves) {
                        //atom.masters[j].slaves[atom.id] = null;
                    }
                }
            }
            //atom.computing = false;
            atom.masters = null;
            atom = null;*/
        }


        /*if (tree.atoms && false) {
         for (var i = 0; i < tree.atoms.length; i++) {
         var atom = tree.atoms[i];
         atom.listeners = null;
         if (atom.masters) {
         for (var j in atom.masters) {
         if (atom.masters[j].slaves) {
         atom.masters[j].slaves[atom.id] = null;
         }
         }
         }
         atom.masters = null;
         atom.listeners = null;
         }
         tree.atoms = [];
         }*/
        if (tree.component) {
            tree.component.componentWillUnmount && tree.component.componentWillUnmount();
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