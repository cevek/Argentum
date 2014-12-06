module Arg {
    /*
     export function map<R>(tagExpr:string, array:Atom<any>, fn:MapFn<R>, split?:string):ITreeItem;
     export function map<R>(tagExpr:string, array:any[], fn:MapFn<R>, split?:string):ITreeItem;
     */

    export interface ITreeItem{
        mapIterator?:IMapIterator<any>;
        map?:Atom<any[]>;
        mapSplit?:string;
    }

    export interface IMapIterator<R> {
        (item:R, i?:number): ITreeItem;
    }

    export function mapper<R>(tagExpr:string,
                              array:any,
                              mapIterator?:(item:R, i:number)=>any,
                              split?:string):ITreeItem {
        if (array.constructor !== Atom) {
            array = new Atom<any>(null, null, array);
        }
        return new TreeItem({
            type: ITreeType.MAP,
            map: array,
            split: split,
            mapIterator: (item, i)=>convertToTree(mapIterator(item, i))
        });
    }

    export function renderMap(node:Node, tree:ITreeItem, nodeBefore?:Node) {
        //tree.node = document.createElement('iterator');

        tree.node = document.createComment("/for");
        tree.node2 = document.createComment("for");
        node.insertBefore(tree.node, nodeBefore);
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

        setValue(tree, tree.map, node, tree, renderMapDOMSet);

        //node.appendChild(tree.node);
    }

    var aaad = 0;

    export function renderMapDOMSet(node:Node, array:any[], tree:ITreeItem) {
        //removeBetween(tree.node2, tree.node);
        removeTree(tree.children);
        if (array) {

            var domNodes:Node[] = [];
            var values:any[] = [];
            tree.children = [];
            for (var i = 0; i < array.length; i++) {
                var child_tree = tree.mapIterator(array[i], i);
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

                var _domNodes:Node[] = [];
                var _values:any[] = [];
                var children:ITreeItem[] = [];
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
                        var data = tree.mapIterator(array[i], i);
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

}