module ag{
    export function map<R>(atomArray:Atom<R[]>, mapIterator:(item:R, i:number)=>any, split?:string):TreeItem {
        return new TreeItem({
            type: TreeType.MAP,
            map: atomArray,
            split: split,
            mapIterator: mapIterator
        });
    }

    export function mapRaw<R>(array:R[], mapIterator:(item:R, i:number)=>any, split?:string):TreeItem {
        var atomArray = new Atom<any>(ag, null, {value: array, name: 'map'});
        return map(atomArray, mapIterator, split);
    }
}

module ag.internal {
    export interface IMapIterator<R> {
        (item:R, i?:number): TreeItem;
    }

    export function renderMap(tree:TreeItem) {
        tree.node = document.createComment("/for");
        (<any>tree.node).tree = tree;
        tree.parentNode.insertBefore(tree.node, tree.nodeBefore);

        tree.children = [];
        var array = (tree.map.get() || []).slice();
        for (var i = 0; i < array.length; i++) {
            tree.children[i] = TreeItem.convertToTree(tree.mapIterator(array[i], i));
        }

        for (var i = 0; i < tree.children.length; i++) {
            var itemTree = tree.children[i];
            itemTree.parentNode = tree.parentNode;
            itemTree.nodeBefore = tree.node;
            render(itemTree);
        }

        var array = tree.map.get() || [];
        if (ag.enableAtoms) {
            array.addListener(mapArrayListener, tree);
            tree.map.addListener(renderMapDOMSet, ag, tree);
        }
    }

    export function renderMapDOMSet(array:any[], tree:TreeItem) {
        removeTreeChildren(tree);
        if (array) {
            tree.children = [];
            tree.mapValues = [];
            for (var i = 0; i < array.length; i++) {
                var itemTree = TreeItem.convertToTree(tree.mapIterator(array[i], i));
                itemTree.parentNode = tree.parentNode;
                itemTree.nodeBefore = tree.node;
                tree.mapValues[i] = array[i];
                tree.children[i] = itemTree;
                render(itemTree);
            }
            if (ag.enableAtoms) {
                array.addListener(mapArrayListener, tree);
            }
        }
    }

    var counter = 0;

    export function mapArrayListener(array:any[], tree:TreeItem) {
        counter++;
        var node = document.createComment("/for" + counter);
        (<any>tree.node).tree = tree;
        tree.parentNode.insertBefore(node, tree.node.nextSibling);
        tree.parentNode.removeChild(tree.node);
        var children:TreeItem[] = [];
        var values:any[] = [];

        for (var i = 0; i < array.length; i++) {
            var index = tree.mapValues.indexOf(array[i]);
            if (index > -1) {
                tree.parentNode.insertBefore(tree.children[index].node, node);
                children[i] = tree.children[index];
                values[i] = tree.mapValues[index];
                tree.children[index] = null;
                tree.mapValues[index] = null;
            }
            else {
                var itemTree = tree.mapIterator(array[i], i);
                itemTree.parentNode = tree.parentNode;
                itemTree.nodeBefore = node;
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