module Arg {
    export function removeTree(tree:any) {
        if (!tree) {
            return;
        }
        if (tree && tree.constructor === Array) {
            for (var i = 0; i < tree.length; i++) {
                if (tree[i] === tree) {
                    throw "cyclyc";
                }
                removeTree(tree[i]);
            }
        }
        if (tree.children) {
            for (var i = 0; i < tree.children.length; i++) {
                if (tree.children[i] === tree) {
                    throw "cyclyc";
                }
                removeTree(tree.children[i]);
            }
            tree.children = [];
        }
        tree.removed = true;
        if (tree.node) {
            tree.node.parentNode.removeChild(tree.node);
            tree.node = null;
        }
        if (tree.node2) {
            tree.node2.parentNode.removeChild(tree.node2);
            tree.node2 = null;
        }
        if (tree.$map) {
            if (tree.$map.constructor === Atom) {
                tree.$map.listeners = null;
                tree.$map.get().listeners = null;
            }
        }
        if (tree.atoms) {
            for (var i = 0; i < tree.atoms.length; i++) {
                var atom = tree.atoms[i];
                atom.listeners = null;
                if (atom.masters) {
                    for (var j = 0; j < atom.masters.length; j++) {
                        if (atom.masters[j].slaves) {
                            atom.masters[j].slaves[atom.id] = null;
                        }
                    }
                }
                atom.masters = null;
                atom.listeners = null;

            }
            tree.atoms = [];
        }
        if (tree.component) {
            tree.component.componentWillUnmount && tree.component.componentWillUnmount();
        }

    }

    export function removeBetween(from:Node, to:Node, included = false) {
        var n:Node;
        var parent = from.parentNode;
        while ((n = from.nextSibling) && n != to) {
            parent.removeChild(n);
        }
        if (included) {
            parent.removeChild(from);
            parent.removeChild(to);
        }
    }

    export function walkArray(node:Node, tree:any):void {
        for (var j = 0; j < tree.length; j++) {
            if (tree[j]) {
                render(node, tree[j]);
            }
        }
    }

    export function setValue(_tree:ITreeItem,
                             value:any,
                             node:any,
                             param1:any,
                             fn:(node:Node, value:any, param1:any)=>void):void {
        if (value.constructor === Function && !value["doNotAtomize"]) {
            value = new Atom<any>(value);
        }
        if (value.constructor === Atom) {

            var atom_val = value.get();
            fn(node, atom_val, param1);
            value.addListener(function (new_val:any) {
                if (atom_val !== new_val) {
                    fn(node, new_val, param1);
                    atom_val = new_val;
                }
            });
            if (!_tree.atoms) {
                _tree.atoms = [];
            }
            _tree.atoms.push(value);
        }
        else if (!value.tag) {
            fn(node, value, param1);
        }
        return;
    }

    export function convertToTree(val:any):TreeItem {

        if (val) {
            var constructor = val.constructor;
            /*if (constructor === Array) {
             for (var i = 0; i < val.length; i++) {
             if (val[i].constructor === Array){
             parent.children.push(convertToTree(parent, val[i]));
             }
             else {
             parent.children.push(convertToTree(parent, val[i]));
             }
             }

             //convertToTree(parent, );
             }*/
            if (constructor === Function) {
                val = new Atom<any>(val);
            }
            if (constructor === Atom) {
                var atom = <Atom<any>>val;
                var atom_val = atom.get();
                return convertToTree(atom_val);
            }
            if (constructor === TreeItem) {
                return val;
            }
            if (val.render) {
                var treeItem = val.render();
                treeItem.tag = prepareViewName(val.constructor.name);
                treeItem.type = ITreeType.TAG;
                return new TreeItem(treeItem);
            }
        }
        return new TreeItem({type: ITreeType.TEXT, value: val});
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

    export function parseTagExpr(tagExpr:string, obj:TreeItem):TreeItem {
        var className = '';
        var lastDot = -1;
        var len = tagExpr.length;
        for (var i = 0; i < len + 1; i++) {
            if (i === len || tagExpr[i] === '.') {
                if (lastDot == -1) {
                    obj.tag = tagExpr.substring(0, i);
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
            if (obj.attrs) {
                obj.attrs['className'] = className;
            } else {
                obj.attrs = {className: className};
            }
        }
        return obj;
    }

}