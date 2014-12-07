module Arg {

    export function renderAttrs(tree:TreeItem) {
        if (tree.attrs) {
            for (var key in tree.attrs) {
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
            tree.node[attr] = tree.attrs[attr];
            if (tree.attrsAtoms && tree.attrsAtoms[attr]) {
                tree.attrsAtoms[attr].addListener(val=> {
                    tree.node[attr] = val;
                });
            }
        }
    }

    export function renderClassSet(tree:TreeItem, className:string) {
        //console.log(className, "changed", tree.classSetAtoms[className]);
        tree.classSetAtoms[className].addListener(val=> {
            var classSet = tree.attrs['classSet'];

            classSet[className] = val;
            var cls = tree.attrs['baseClassName'] || '';
            for (var i in classSet) {
                if (classSet[i]) {
                    cls += ' ' + i;
                }
            }
            tree.attrs['className'] = cls;
            tree.node['className'] = cls;
        });
    }

    export function renderStyle(tree:TreeItem, styleName:string) {
        tree.node['style'][styleName] = styleCompleter(styleName, tree.attrs['style'][styleName]);

        if (tree.styleAtoms && tree.styleAtoms[styleName]) {
            tree.styleAtoms[styleName].addListener(val=> {
                tree.node['style'][styleName] = styleCompleter(styleName, val);
            });
        }
    }

    export function prepareAttrs(tree:TreeItem) {
        if (tree.attrs) {
            for (var key in tree.attrs) {
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
        if (tree.attrs[attr].constructor === Function && attr.substr(0, 2) !== 'on') {
            tree.attrs[attr] = new Atom(tree.attrs[attr]);
        }
        if (tree.attrs[attr].constructor === Atom) {
            var atom = new Atom(tree.attrs[attr]);
            tree.attrs[attr] = atom.get();

            tree.attrsAtoms = tree.attrsAtoms || {};
            tree.attrsAtoms[attr] = atom;
            tree.atoms.push(atom);
        }
    }

    export function prepareStyles(tree:TreeItem) {
        var styles = tree.attrs['style'];
        for (var styleName in styles) {
            if (styles[styleName].constructor === Function) {
                styles[styleName] = new Atom(styles[styleName]);
            }
            if (styles[styleName].constructor === Atom) {
                var atom = <Atom<any>>styles[styleName];
                styles[styleName] = atom.get();

                tree.styleAtoms = tree.styleAtoms || {};
                tree.styleAtoms[styleName] = atom;
                tree.atoms.push(atom);
            }
        }
    }

    export function prepareClassSet(tree:TreeItem) {
        var cls = tree.attrs['baseClassName'] || '';
        var classSet = tree.attrs['classSet'];

        for (var i in classSet) {
            if (classSet[i].constructor === Function) {
                classSet[i] = new Atom(classSet[i]);
            }
            if (classSet[i].constructor === Atom) {
                var atom = <Atom<any>>classSet[i];
                classSet[i] = atom.get();
                tree.classSetAtoms = tree.classSetAtoms || {};
                tree.classSetAtoms[i] = atom;
                tree.atoms.push(atom);
            }
            if (classSet[i]) {
                cls += ' ' + i;
            }
        }
        tree.attrs['className'] = cls;
    }

    export function styleCompleter(prop:string, value:any) {
        var val = value;
        if (!isNaN(+val) && (prop === 'height' || prop === 'width' || prop === 'top' || prop === 'left')) {
            val += 'px';
        }
        return val;
    }
}