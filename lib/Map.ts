module Arg {

    export interface IMapIterator<R> {
        (item:R, i?:number): TreeItem;
    }

    export function mapper<R>(atomArray:Atom<R[]>, mapIterator:(item:R, i:number)=>any, split?:string):TreeItem;
    export function mapper<R>(atomArray:R[], mapIterator:(item:R, i:number)=>any, split?:string):TreeItem;
    export function mapper<R>(atomArray:any, mapIterator:(item:R, i:number)=>any, split?:string):TreeItem {
        if (atomArray.constructor !== Atom) {
            atomArray = new Atom<any>(null, null, atomArray, 'Arg.map');
        }

        var children:TreeItem[] = [];
        var array = (atomArray.get() || []).slice();
        for (var i = 0; i < array.length; i++) {
            children[i] = convertToTree(mapIterator(array[i], i));
        }

        return new TreeItem({
            type: TreeType.MAP,
            map: atomArray,
            split: split,
            children: children,
            mapValues: array,
            mapIterator: mapIterator
        });
    }

    export function renderMap(tree:TreeItem) {
        tree.node = document.createComment("/for");
        tree.parentNode.insertBefore(tree.node, tree.nodeBefore);

        for (var i = 0; i < tree.children.length; i++) {
            var itemTree = tree.children[i];
            itemTree.parentNode = tree.parentNode;
            itemTree.nodeBefore = tree.node;
            render(itemTree);
        }

        var array = tree.map.get() || [];
        if (Arg.enableAtoms) {
            array.addListener(mapArrayListener, tree);
            tree.map.addListener(renderMapDOMSet, tree);
        }
    }

    export function renderMapDOMSet(array:any[], tree:TreeItem) {
        removeTreeChildren(tree);
        if (array) {
            tree.children = [];
            tree.mapValues = [];
            for (var i = 0; i < array.length; i++) {
                var itemTree = convertToTree(tree.mapIterator(array[i], i));
                itemTree.parentNode = tree.parentNode;
                itemTree.nodeBefore = tree.node;
                tree.mapValues[i] = array[i];
                tree.children[i] = itemTree;

                if (itemTree.parentNode) {
                    render(itemTree);
                }
            }
            if (Arg.enableAtoms) {
                array.addListener(mapArrayListener, tree);
            }
        }
    }

    var counter = 0;

    export function mapArrayListener(array:any[], tree:TreeItem) {
        counter++;
        if (tree.parentNode) {
            var node = document.createComment("/for" + counter);
            tree.parentNode.insertBefore(node, tree.node.nextSibling);
            tree.parentNode.removeChild(tree.node);
        }
        var children:TreeItem[] = [];
        var values:any[] = [];

        for (var i = 0; i < array.length; i++) {
            var index = tree.mapValues.indexOf(array[i]);
            if (index > -1) {
                if (tree.parentNode && tree.children[index].node) {
                    tree.parentNode.insertBefore(tree.children[index].node, node);
                }
                children[i] = tree.children[index];
                values[i] = tree.mapValues[index];
                tree.children[index] = null;
                tree.mapValues[index] = null;
            }
            else {
                var itemTree = tree.mapIterator(array[i], i);
                if (itemTree.parentNode) {
                    itemTree.parentNode = tree.parentNode;
                    itemTree.nodeBefore = node;
                }
                render(itemTree);
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