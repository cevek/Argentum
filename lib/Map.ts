module Arg {
    export function renderMapHelper(node:Node, tree:Tree, array:any[]) {

        /*
         if (tree.node) {
         while (tree.node.firstChild) {
         tree.node.removeChild(tree.node.firstChild);
         }
         }
         */
        //tree.domNode = document.createDocumentFragment();
        //tree.domNode.appendChild(document.createTextNode('fuck'));

        tree.children = [];
        for (var i = 0; i < array.length; i++) {
            tree.children[i] = tree.fn(array[i], i);
            render(node, tree.children[i], tree.node);
            /*
             if (tree.$split && i > 0) {
             node.insertBefore(document.createTextNode(tree.$split), tree.children[i].domNode);
             }
             */
            //render(node, [tree.children[i], i < array.length - 1 ? tree.$split : ''], tree.domNode);
        }
        /*array.addListener && array.addListener(function (event, item) {
         if (event === 'added') {
         var val = array.get(item);
         tree.children[item] = tree.fn(val, item);

         render(node, [tree.children.length > 0 ? tree.$split : '', tree.children[item]], item < tree.children.length - 1 ? tree.children[item + 1].domNode : tree.domNode);
         console.log(event, item, val);
         }

         });*/
    }

    var aaad = 0;

    export function renderMapDOMSet(node:any, array:any[], tree:Tree) {
        //removeBetween(tree.node2, tree.node);
        removeTree(tree.children);
        if (array) {

            var domNodes:any[] = [];
            var values:any[] = [];
            tree.children = [];
            for (var i = 0; i < array.length; i++) {
                var child_tree = tree.fn(array[i], i);
                render(node, child_tree, tree.node);
                domNodes.push(child_tree.node);
                tree.children[i] = child_tree;
                values.push(array[i]);
            }
            array.addListener(()=> {
                aaad++;
                var node = document.createComment("/for" + aaad);
                var node2 = document.createComment("for" + aaad);
                node.insertBefore(node, tree.node.nextSibling); //tree.node.nextSibling
                node.insertBefore(node2, node);

                var _domNodes:any[] = [];
                var _values:any[] = [];
                var children:Tree[] = [];
                for (var i = 0; i < array.length; i++) {
                    var index = values.indexOf(array[i]);
                    if (index > -1) {
                        _domNodes[i] = domNodes[index];
                        node.insertBefore(domNodes[index], node);
                        children[i] = tree.children[index];
                        domNodes[index] = null;
                        values[index] = null;
                        tree.children[index] = null;
                    }
                    else {
                        var data = tree.fn(array[i], i);
                        render(node, data, node);
                        _domNodes[i] = data.node;
                        children[i] = data;
                    }
                    _values[i] = array[i];
                }
                for (var i = 0; i < tree.children.length; i++) {
                    removeTree(tree.children[i]);
                }
                tree.children = children;

                removeBetween(tree.node2, tree.node, true);
                //removeTree(tree);

                domNodes = _domNodes;
                values = _values;
                tree.node = node;
                tree.node2 = node2;

            });
        }
    }

    export function renderMap(node:Node, tree:Tree):Tree {
        //tree.node = document.createElement('iterator');

        tree.node = document.createComment("/for");
        tree.node2 = document.createComment("for");
        node.insertBefore(tree.node, null);
        node.insertBefore(tree.node2, tree.node);

        /*        var array = tree.$map;
         if (array.constructor === Function) {
         tree.$map = array = new Atom(array);
         }
         if (array.constructor === Atom) {
         renderMapHelper(node, tree, array.val);
         array.addListener(function () {
         renderMapHelper(node, tree, array.val);
         });
         }
         else {
         renderMapHelper(node, tree, array);
         }*/

        setValue(tree, tree.$map, node, tree, renderMapDOMSet);
        return tree;

        //node.appendChild(tree.node);
    }
}