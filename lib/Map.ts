module ag{
    export function map<R>(atomArray:List<R>, mapIterator:(item:R, i:number)=>any, split?:string):TreeItem {
        return new TreeItem({
            type: TreeType.MAP,
            map: atomArray,
            split: split,
            mapIterator: mapIterator
        });
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
        tree.mapValues = tree.map.toArray();

        for (var i = 0; i < tree.mapValues.length; i++) {
            tree.children[i] = TreeItem.convertToTree(tree.mapIterator(tree.mapValues[i], i));
            var itemTree = tree.children[i];
            itemTree.parentNode = tree.parentNode;
            itemTree.nodeBefore = tree.node;
            itemTree.parentTree = tree.parentTree;
            render(itemTree);
        }

        //var array = tree.map || [];
        if (ag.enableAtoms) {
            //array.addListener(mapArrayListener, tree);
            //tree.map.addListener(renderMapDOMSet, tree, tree);
            tree.map.addListener(mapArrayListener, tree, tree);
        }
    }

   /* export function renderMapDOMSet(array:any[], tree:TreeItem) {
        tree.removeChildren();
        if (array) {
            tree.children = [];
            tree.mapValues = [];
            for (var i = 0; i < array.length; i++) {
                var itemTree = TreeItem.convertToTree(tree.mapIterator(array[i], i));
                itemTree.parentNode = tree.parentNode;
                itemTree.nodeBefore = tree.node;
                itemTree.parentTree = tree.parentTree;
                tree.mapValues[i] = array[i];
                tree.children[i] = itemTree;
                render(itemTree);
            }
            if (ag.enableAtoms) {
                array.addListener(mapArrayListener, tree);
            }
        }
    }*/

    var counter = 0;
    //todo: mapArrayListener doesnt work
    export function mapArrayListener(a1rray:any[], tree:TreeItem) {
        //console.log("mapArrayListener", tree);

        counter++;
        var node = document.createComment("/for" + counter);
        (<any>node).tree = tree;
        tree.parentNode.insertBefore(node, tree.node.nextSibling);
        tree.parentNode.removeChild(tree.node);
        var children:TreeItem[] = [];
        var values:any[] = [];

        for (var i = 0; i < tree.map.length; i++) {
            var index = tree.mapValues.indexOf(tree.map[i]);
            if (index > -1) {
                tree.parentNode.insertBefore(tree.children[index].node, node);
                children[i] = tree.children[index];
                values[i] = tree.mapValues[index];
                tree.children[index] = null;
                tree.mapValues[index] = null;
            }
            else {
                var itemTree = tree.mapIterator(tree.map[i], i);
                itemTree.parentNode = tree.parentNode;
                itemTree.nodeBefore = node;
                itemTree.parentTree = tree.parentTree;
                render(itemTree);
                children[i] = itemTree;
                values[i] = tree.map[i];
            }
        }
        tree.removeChildren();
        tree.children = children;
        tree.mapValues = values;
        tree.node = node;
    }
}