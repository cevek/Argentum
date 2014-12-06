module Arg {
    export function renderTagDOMSet(node:Node, val:any) {
        node.textContent = val === void 0 ? '' : val;
    }

    export function renderAttrDOMSet(node:any, val:any, key:string) {
        node[key] = val;
    }

    export function renderTag(node:HTMLElement, tree:ITreeItem, nodeBefore:Node) {
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

        node.insertBefore(tree.node, nodeBefore);
        if (tree.children) {
            for (var i = 0; i < tree.children.length; i++) {
                render(tree.node, tree.children[i]);
            }
        }
    }

    export function text(node:Node, tree:ITreeItem, nodeBefore:Node) {
        var domNode = document.createTextNode('');
        node.insertBefore(domNode, nodeBefore);
        tree.node = domNode;
        setValue(tree, tree.value, domNode, null, (node:Node, val:any) => {
            node.textContent = val === void 0 ? '' : val;
        });
    }

}