module ag.internal {

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
                if (key === 'self' && tree.attrs[key] && tree.attrs[key] instanceof Atom) {
                    var selfAtom = <Atom<TreeItem>>tree.attrs[key];
                    selfAtom.set(tree);
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
        if (tree.attrs[attr] && tree.attrs[attr].constructor === Function) {
            if (attr.substr(0, 2) === 'on') {
                //var fn = tree.attrs[attr];
                //tree.attrs[attr] = ()=>fn.apply(tree.component, arguments);
            }
            else {
                var getter:IAtomGetter<any> = tree.attrs[attr];
                tree.attrs[attr] = new AtomFormula(tree, getter, {name: 'attr'});
            }
        }
        if (tree.attrs[attr] && tree.attrs[attr] instanceof Atom) {
            var atom:Atom<any> = tree.attrs[attr];
            tree.attrs[attr] = atom.get();

            tree.attrsAtoms = tree.attrsAtoms || {};
            tree.attrsAtoms[attr] = atom;
        }
    }

    export function renderAttrs(tree:TreeItem) {
        if (tree.attrs) {
            for (var key in tree.attrs) {
                if (key.substr(0, 3) === 'arg' || key === 'self') {
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
            if (tree.attrsAtoms && tree.attrsAtoms[attr] && ag.enableAtoms) {
                tree.attrsAtoms[attr].addListener(renderAttrAtomListener, tree, tree, attr);
            }
        }
    }

    export function renderAttrAtomListener(val:any, tree:TreeItem, attr:string) {
        if (!tree.removed && val !== void 0) {
            //todo: remove listener
            if (attr.substr(0, 2) === 'on') {
                if (tree.attrs[attr].constructor === Array) {
                    for (var i = 0; i < tree.attrs[attr].length; i++) {
                        tree.node.addEventListener(attr.substr(2), tree.attrs[attr][i]);
                    }
                }
                else {
                    tree.node.addEventListener(attr.substr(2), tree.attrs[attr]);
                }
            }
            else {
                tree.attrs[attr] = val;
                (<any>tree.node)[attr] = val;
            }
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
                var getter:IAtomGetter<any> = styles[styleName];
                styles[styleName] = new AtomFormula(tree, getter, {getter: getter, name: 'style'});
            }
            if (styles[styleName] && styles[styleName] instanceof Atom) {
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

        if (tree.styleAtoms && tree.styleAtoms[styleName] && ag.enableAtoms) {
            tree.styleAtoms[styleName].addListener(applyStyleListener, tree, tree, styleName);
        }
    }

    export function applyStyleListener(val:any, tree:TreeItem, styleName:string) {
        if (!tree.removed && val !== void 0) {
            tree.attrs.style[styleName] = val;
            (<any>tree.node)['style'][styleName] = styleCompleter(styleName, val);
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
                var getter = <IAtomGetter<any>>classSet[i];
                classSet[i] = new AtomFormula(tree, getter, {name: 'classSetItem'});
            }
            if (classSet[i] && classSet[i] instanceof Atom) {
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
        if (ag.enableAtoms) {
            tree.classSetAtoms[className].addListener(classSetAtomListener, tree, tree, className);
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
        tree.attrs.className = cls;
        (<any>tree.node).className = cls;
    }

}