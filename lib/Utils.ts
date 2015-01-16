module ag {

    export function traverseTree(startTree:TreeItem, callback:(tree:TreeItem)=>any, maxDepth = 0) {
        if (startTree.children) {
            for (var i = 0; i < startTree.children.length; i++) {
                callback(startTree.children[i]);
                if (maxDepth === 0 || maxDepth > 1) {
                    traverseTree(startTree.children[i], callback, maxDepth ? maxDepth - 1 : 0);
                }
            }
        }
    }

    export function removeTreeChildren(tree:TreeItem) {
        if (tree && tree.children) {
            for (var i = 0; i < tree.children.length; i++) {
                tree.children[i].destroy(true);
            }
            tree.children = null;
        }
    }


    export function convertToTree(val:any):TreeItem {
        if (val) {
            var constructor = val.constructor;
            if (constructor === Function) {
                var getter:IAtomGetter<any> = val;
                val = new Atom<any>(ag, getter, {name: 'atom'});
                constructor = Atom;
            }
            if (constructor === Atom) {
                var atom:Atom<any> = val;
                var child = atom.get();
                return new TreeItem({
                    type: TreeType.ATOM,
                    whenCondition: atom,
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
                treeItem.component.tree = treeItem;
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
                if (!tree.attrs.className) {
                    tree.attrs.className = className;
                    tree.attrs.baseClassName = className;
                }
            } else {
                tree.attrs = {className: className, baseClassName: className};
            }
        }
        else {
            if (tree.attrs && tree.attrs.className) {
                tree.attrs.baseClassName = tree.attrs.className;
            }

        }

        return tree;
    }

    export function extendsAttrs(attrs: any, extendsAttrs: any) {
        attrs = attrs || {};
        if (extendsAttrs){
            for (var attr in extendsAttrs) {
                attrs[attr] = extendsAttrs[attr];
            }
        }
        return attrs;
    }

    export function log(param:any) {
        console.log(param);
        return param;
    }
}