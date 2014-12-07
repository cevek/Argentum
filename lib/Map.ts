module Arg {

    export interface IMapIterator<R> {
        (item:R, i?:number): TreeItem;
    }

    export function mapper<R>(tagExpr:string,
                              array:any,
                              mapIterator:(item:R, i:number)=>any,
                              split?:string):TreeItem {
        if (array.constructor !== Atom) {
            array = new Atom<any>(null, null, array);
        }
        return parseTagExpr(tagExpr, new TreeItem({
            type: TreeType.MAP,
            map: array,
            split: split,
            mapIterator: (item, i)=>convertToTree(mapIterator(item, i))
        }));
    }

    export function renderMap(node:Node, tree:TreeItem, nodeBefore?:Node) {
        tree.node = document.createComment("/for");
        node.insertBefore(tree.node, nodeBefore);

        var oldVal = tree.map.get();
        renderMapDOMSet(node, tree.map.get(), tree);
        tree.map.addListener(newVal=> {
            if (oldVal !== newVal) {
                renderMapDOMSet(node, newVal, tree);
            }
        });
    }

    export function renderMapDOMSet(parentNode:Node, array:any[], tree:TreeItem) {
        removeTreeChildren(tree);
        if (array) {
            tree.children = [];
            tree.mapValues = [];
            for (var i = 0; i < array.length; i++) {
                var itemTree = tree.mapIterator(array[i], i);
                tree.mapValues[i] = array[i];
                tree.children[i] = itemTree;
                render(parentNode, itemTree, tree.node);
            }
            array.addListener(()=>mapArrayListener(parentNode, array, tree));
        }
    }

    var counter = 0;

    export function mapArrayListener(parentNode:Node, array:any[], tree:TreeItem) {
        counter++;
        var node = document.createComment("/for" + counter);
        parentNode.insertBefore(node, tree.node.nextSibling);
        parentNode.removeChild(tree.node);

        var children:TreeItem[] = [];
        var values:any[] = [];

        for (var i = 0; i < array.length; i++) {
            var index = tree.mapValues.indexOf(array[i]);
            if (index > -1) {
                parentNode.insertBefore(tree.children[index].node, node);
                children[i] = tree.children[index];
                values[i] = tree.mapValues[index];
                tree.children[index] = null;
                tree.mapValues[index] = null;
            }
            else {
                var itemTree = tree.mapIterator(array[i], i);
                render(parentNode, itemTree, node);
                children[i] = itemTree;
                values[i] = array[i];
            }
        }
        removeTreeChildren(tree);
        tree.children = children;
        tree.mapValues = values;

        tree.node = node;
    }
}