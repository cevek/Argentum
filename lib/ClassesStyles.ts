module Arg {
    export function applyStyleDOMSet(styleNode:any, value:any, prop:string) {
        var val = value;
        if (!isNaN(+val) && (prop === 'height' || prop === 'width' || prop === 'top' || prop === 'left')) {
            val += 'px';
        }
        styleNode[prop] = val;
    }

    export function applyStyle(tree:TreeItem, node:HTMLElement, styles:any):void {
        for (var i in styles) {
            setValue(tree, styles[i], node.style, i, applyStyleDOMSet);
        }
    }

    export function applyClassSet(tree:TreeItem,
                                  node:HTMLElement,
                                  cls:string,
                                  classSet:{[index: string]: any},
                                  isDeep = false) {

        var className = cls;
        for (var i in classSet) {
            var val = classSet[i];
            if (classSet[i].constructor === Function) {
                classSet[i] = new Atom(classSet[i]);
            }
            if (classSet[i].constructor === Atom) {
                tree.atoms = tree.atoms || [];
                tree.atoms.push(classSet[i]);

                val = classSet[i].get();
                if (!isDeep) {
                    classSet[i].addListener(function () {
                        applyClassSet(tree, node, cls, classSet, true);
                    });
                }
            }
            if (val) {
                className += ' ' + i;
            }
        }

        node.className = className;
    }
}
