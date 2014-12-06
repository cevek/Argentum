module Arg {

    export interface ITreeItem {
        mapIterator?:IMapIterator<any>;
        map?:Atom<any[]>;
        mapSplit?:string;
    }

    export interface IMapIterator<R> {
        (item:R, i?:number): ITreeItem;
    }

    export function mapper<R>(tagExpr:string,
                              array:any,
                              mapIterator:(item:R, i:number)=>any,
                              split?:string):ITreeItem {
        if (array.constructor !== Atom) {
            array = new Atom<any>(null, null, array);
        }
        return parseTagExpr(tagExpr, new TreeItem({
            type: ITreeType.MAP,
            map: array,
            split: split,
            mapIterator: (item, i)=>convertToTree(mapIterator(item, i))
        }));
    }

    export function renderMap(node:Node, tree:ITreeItem, nodeBefore?:Node) {
        tree.node = document.createComment("/for");
        tree.node2 = document.createComment("for");
        node.insertBefore(tree.node, nodeBefore);
        node.insertBefore(tree.node2, tree.node);

        renderMapDOMSet(node, tree.map.get(), tree);
        tree.map.addListener(()=> {
            renderMapDOMSet(node, tree.map.get(), tree);
        });
    }

    var aaad = 0;

    export function renderMapDOMSet(parentNode:Node, array:any[], tree:ITreeItem) {
        removeTree(tree.children);
        if (array) {

            var domNodes:Node[] = [];
            var values:any[] = [];
            tree.children = [];
            for (var i = 0; i < array.length; i++) {
                var child_tree = tree.mapIterator(array[i], i);
                render(parentNode, child_tree, tree.node);
                domNodes.push(child_tree.node);
                tree.children[i] = child_tree;
                values.push(array[i]);
            }
            array.addListener(()=> {
                aaad++;
                var node = document.createComment("/for" + aaad);
                var node2 = document.createComment("for" + aaad);
                parentNode.insertBefore(node, tree.node.nextSibling); //tree.node.nextSibling
                parentNode.insertBefore(node2, node);

                var _domNodes:Node[] = [];
                var _values:any[] = [];
                var children:ITreeItem[] = [];
                for (var i = 0; i < array.length; i++) {
                    var index = values.indexOf(array[i]);
                    if (index > -1) {
                        _domNodes[i] = domNodes[index];
                        parentNode.insertBefore(domNodes[index], node);
                        children[i] = tree.children[index];
                        domNodes[index] = null;
                        values[index] = null;
                        tree.children[index] = null;
                    }
                    else {
                        var data = tree.mapIterator(array[i], i);
                        render(parentNode, data, node);
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

                domNodes = _domNodes;
                values = _values;
                tree.node = node;
                tree.node2 = node2;
            });
        }
    }

}