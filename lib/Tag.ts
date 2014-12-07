module Arg {
    export function renderTagDOMSet(node:Node, val:any) {
        node.textContent = val === void 0 ? '' : val;
    }

    export function renderAttrDOMSet(node:any, val:any, key:string) {
        node[key] = val;
    }

    export function renderTag(tree:TreeItem) {
        tree.node = document.createElement(tree.tag);
        if (tree.attrs) {
            for (var key in tree.attrs) {
                if (tree.attrs[key].constructor === Function && key.substr(0, 2) == "on") {
                    tree.attrs[key]["doNotAtomize"] = true;
                }
                if (key === "style") {
                    applyStyle(tree, <HTMLElement>tree.node, tree.attrs['style']);
                }
                else if (key === 'classSet') {
                    applyClassSet(tree, <HTMLElement>tree.node, tree.attrs['className'], tree.attrs['classSet']);
                }
                // if key == className and not has classSets or anything else
                else if (!tree.attrs['classSet'] || key != 'className') {
                    setValue(tree, tree.attrs[key], tree.node, key, renderAttrDOMSet);
                }
            }
        }

        tree.parentNode.insertBefore(tree.node, tree.nodeBefore);
        if (tree.children) {
            for (var i = 0; i < tree.children.length; i++) {
                tree.children[i].parentNode = tree.node;
                render(tree.children[i]);
            }
        }
    }

    export function text(tree:TreeItem) {
        var domNode = document.createTextNode('');
        tree.parentNode.insertBefore(domNode, tree.nodeBefore);
        tree.node = domNode;
        setValue(tree, tree.value, domNode, null, (node:Node, val:any) => {
            node.textContent = val === void 0 ? '' : val;
        });
    }

}