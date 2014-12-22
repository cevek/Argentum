module Arg {

    /*
     *===========================
     *    Simple Attributes
     *===========================
     */
    export function prepareAttrs(tree:TreeItem) {
        if (tree.attrs) {
            for (var key in tree.attrs) {
                if (key.substr(0, 3) === 'arg') {
                    continue;
                }
                prepareAttr(tree, key);

                if (key === 'style') {
                    prepareStyles(tree);
                }
                else if (key === 'classSet') {
                    prepareClassSet(tree);
                }
            }
        }
    }

    export function prepareAttr(tree:TreeItem, attr:string) {
        if (tree.attrs[attr] && tree.attrs[attr].constructor === Function && attr.substr(0, 2) !== 'on') {
            tree.attrs[attr] = new Atom(Arg, {
                getter: tree.attrs[attr],
                name: 'attr'
            });
        }
        if (tree.attrs[attr] && tree.attrs[attr].constructor === Atom) {
            var atom:Atom<any> = tree.attrs[attr];
            tree.attrs[attr] = atom.get();

            tree.attrsAtoms = tree.attrsAtoms || {};
            tree.attrsAtoms[attr] = atom;
        }
    }

    export function renderAttrs(tree:TreeItem) {
        if (tree.attrs) {
            for (var key in tree.attrs) {
                if (key.substr(0, 3) === 'arg') {
                    continue;
                }
                renderAttr(tree, key);
            }
        }
    }

    export function renderAttr(tree:TreeItem, attr:string) {
        if (attr === 'style') {
            for (var styleName in tree.attrs['style']) {
                renderStyle(tree, styleName);
            }
        }
        else if (attr === 'classSet') {
            if (tree.classSetAtoms) {
                for (var className in tree.classSetAtoms) {
                    renderClassSet(tree, className);
                }
            }
        }
        else {
            renderAttrAtomListener(tree.attrs[attr], tree, attr);
            if (tree.attrsAtoms && tree.attrsAtoms[attr] && Arg.enableAtoms) {
                tree.attrsAtoms[attr].addListener(renderAttrAtomListener, tree, attr);
            }
        }
    }

    export function renderAttrAtomListener(val:any, tree:TreeItem, attr:string) {
        if (!tree.removed && val !== void 0) {
            tree.attrs[attr] = val;
            tree.node[attr] = val;
        }
    }

    /*
     *===========================
     *   Styles
     *===========================
     */

    export function prepareStyles(tree:TreeItem) {
        var styles = tree.attrs['style'];
        for (var styleName in styles) {
            if (styles[styleName] && styles[styleName].constructor === Function) {
                styles[styleName] = new Atom(Arg, {
                    getter: styles[styleName],
                    name: 'style'
                });
            }
            if (styles[styleName] && styles[styleName].constructor === Atom) {
                var atom:Atom<any> = styles[styleName];
                styles[styleName] = atom.get();

                tree.styleAtoms = tree.styleAtoms || {};
                tree.styleAtoms[styleName] = atom;
            }
        }
    }

    export function renderStyle(tree:TreeItem, styleName:string) {
        //tree.node['style'][styleName] = styleCompleter(styleName, tree.attrs['style'][styleName]);
        applyStyleListener(tree.attrs['style'][styleName], tree, styleName);

        if (tree.styleAtoms && tree.styleAtoms[styleName] && Arg.enableAtoms) {
            tree.styleAtoms[styleName].addListener(applyStyleListener, tree, styleName);
        }
    }

    export function applyStyleListener(val:any, tree:TreeItem, styleName:string) {
        if (!tree.removed && val !== void 0) {
            tree.attrs.style[styleName] = val;
            tree.node['style'][styleName] = styleCompleter(styleName, val);
        }
    }

    export function styleCompleter(prop:string, value:any) {
        var val = value;
        if (!isNaN(+val) && (prop === 'height' || prop === 'width' || prop === 'top' || prop === 'left')) {
            val += 'px';
        }
        return val;
    }

    /*
     *===========================
     *   ClassSets
     *===========================
     */
    export function prepareClassSet(tree:TreeItem) {
        var cls = tree.attrs['baseClassName'] || '';
        var classSet = tree.attrs['classSet'];

        for (var i in classSet) {
            if (classSet[i] && classSet[i].constructor === Function) {
                classSet[i] = new Atom(Arg, {
                    getter: classSet[i],
                    name: 'classSetItem'
                });
            }
            if (classSet[i] && classSet[i].constructor === Atom) {
                var atom:Atom<any> = classSet[i];
                classSet[i] = atom.get();
                tree.classSetAtoms = tree.classSetAtoms || {};
                tree.classSetAtoms[i] = atom;
            }

            if (classSet[i]) {
                cls += ' ' + i;
            }
        }
        tree.attrs['className'] = cls.trim();
    }

    export function renderClassSet(tree:TreeItem, className:string) {
        //console.log(className, "changed", tree.classSetAtoms[className]);
        if (Arg.enableAtoms) {
            tree.classSetAtoms[className].addListener(classSetAtomListener, tree, className);
        }
    }

    export function classSetAtomListener(val:any, tree:TreeItem, className:string) {
        if (tree.removed) {
            return;
        }
        var classSet = tree.attrs['classSet'];

        classSet[className] = val;
        var cls = tree.attrs['baseClassName'] || '';
        for (var i in classSet) {
            if (classSet[i]) {
                cls += ' ' + i;
            }
        }
        cls = cls.trim();
        tree.attrs['className'] = cls;
        tree.node['className'] = cls;
    }

}