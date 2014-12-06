/// <reference path="Atom.ts"/>
/// <reference path="Interfaces.ts"/>
/// <reference path="Utils.ts"/>
/// <reference path="Attributes.ts"/>
/// <reference path="ClassesStyles.ts"/>
/// <reference path="Map.ts"/>
/// <reference path="Tag.ts"/>
/// <reference path="When.ts"/>

module Arg {

    export function publicRender(node:Node, treeItem:any) {
        var _treeItem = convertToTree(treeItem);
        render(node, _treeItem);
        return _treeItem;
    }

    export function render(node:Node, tree:ITreeItem, nodeBefore?:Node) {
        /*
         if (tree.constructor === Array) {
         walkArray(node, tree);
         return;
         }
         */

        if (tree.type === ITreeType.TAG) {
            renderTag(<HTMLElement>node, tree, nodeBefore);
        }
        if (tree.type === ITreeType.TEXT) {
            text(node, tree, nodeBefore);
        }
        if (tree.type === ITreeType.MAP) {
            renderMap(node, tree, nodeBefore);
        }
        if (tree.type === ITreeType.WHEN) {
            renderWhen(node, tree, nodeBefore);
        }
        if (tree.atom) {
            tree.atom.addListener(newValue=> {
                if (tree !== newValue) {
                    removeTree(tree);
                    tree = convertToTree(newValue);
                    render(node, tree, nodeBefore);
                }
            });
        }

        /*
         if (tree.$map) {
         return renderMap(node, tree);
         }
         if (tree.tag == 'when') {
         return renderWhen(node, tree);
         }
         */
        /* if (tree.tag) {
         return renderTag(<HTMLElement>node, tree, nodeBefore);
         }*/
        /*
         if (tree.render) {
         var data = tree.render();
         data.tag = prepareViewName(tree.constructor.name);
         data.component = tree;
         if (data.component.componentWillMount) {
         data.component.componentWillMount();
         }
         var sub_tree = render(node, data, nodeBefore);
         data.component.domNode = sub_tree.node;
         if (data.component.componentDidMount) {
         data.component.componentDidMount(data.component.domNode);
         }
         return sub_tree;
         }
         */

        /*        if (tree.constructor === Function) {
         tree = new Atom<any>(tree);
         }
         if (tree.constructor === Atom) {
         var atom = <Atom<any>>tree;
         tree.atoms = tree.atoms || [];
         tree.atoms.push(atom);

         var sub_tree = render(node, atom.get(), nodeBefore);
         atom.addListener(()=> {
         var _sub_tree = render(node, atom.get(), sub_tree.node);
         sub_tree.node.parentNode.removeChild(sub_tree.node);
         sub_tree = _sub_tree;
         });

         return sub_tree;
         }*/
        //return text(node, tree, nodeBefore);
    }

    export function dom(tagExpr:string, ...children:any[]) {
        var treeItem = new TreeItem({
            type: ITreeType.TAG,
            children: children
        });
        if (children[0].constructor === Object && !children[0].tag) {
            treeItem.attrs = children.shift();
        }
        return parseTagExpr(tagExpr, treeItem);
    }

    export module dom {

        /*  export function map<R>(tagExpr:string, array:Atom<any>, fn:MapFn<R>, split?:string):ITreeItem;
         export function map<R>(tagExpr:string, array:any[], fn:MapFn<R>, split?:string):ITreeItem;
         export function map<R>(tagExpr:any, array:any, fn?:any, split?:any):ITreeItem {
         return {tag: 'map', attrs: null, $map: array || [], $split: split, fn: fn, children: null};
         }

         export function when(condition:any, fn:WhenFn):ITreeItem {
         return {tag: 'when', attrs: null, when: condition, whenFn: fn, children: null};
         }*/

        export var map = mapper;
        export var when = wheeen;

        export function root(...children:any[]):ITreeItem {
            children.unshift('root');
            return dom.apply(null, children);
        }
    }

}

var d = Arg.dom;


