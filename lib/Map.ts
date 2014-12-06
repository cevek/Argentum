module Arg {

    export interface ITreeItem {
        mapIterator?:IMapIterator<any>;
        map?:Atom<any[]>;
        mapSplit?:string;
        mapValues?: any[];
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

    export function renderMapDOMSet(parentNode:Node, array:any[], tree:ITreeItem) {
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

    export function mapArrayListener(parentNode:Node, array:any[], tree:ITreeItem) {
        counter++;
        var node = document.createComment("/for" + counter);
        var node2 = document.createComment("for" + counter);
        parentNode.insertBefore(node, tree.node.nextSibling);
        parentNode.insertBefore(node2, node);

        var children:ITreeItem[] = [];
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
        for (var i = 0; i < tree.children.length; i++) {
            removeTree(tree.children[i]);
        }
        tree.children = children;
        tree.mapValues = values;

        removeBetween(tree.node2, tree.node, true);

        tree.node = node;
        tree.node2 = node2;
    }
}