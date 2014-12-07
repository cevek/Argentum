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

    export function render(node:Node, tree:TreeItem, nodeBefore?:Node) {
        if (tree.type === TreeType.TAG) {
            renderTag(<HTMLElement>node, tree, nodeBefore);
        }
        if (tree.type === TreeType.TEXT) {
            text(node, tree, nodeBefore);
        }
        if (tree.type === TreeType.MAP) {
            renderMap(node, tree, nodeBefore);
        }
        if (tree.atom) {
            var oldVal = tree.atom.get();
            tree.atom.addListener(newValue=> {
                if (oldVal !== newValue) {
                    var newTree = convertToTree(newValue);
                    render(node, newTree, tree.node);
                    changeTree(tree, newTree);
                    oldVal = newValue;
                }
            });
        }
    }

    export function dom(tagExpr:string, ...children:any[]) {
        if (children[0].constructor === Object) {
            var attrs = children.shift();
        }
        var treeItem = new TreeItem({
            type: TreeType.TAG,
            children: children
        });
        if (attrs) {
            treeItem.attrs = attrs;
        }
        return parseTagExpr(tagExpr, treeItem);
    }

    export module dom {
        export var map = mapper;
        export var when = wheeen;

        export function root(...children:any[]):TreeItem {
            children.unshift('root');
            return dom.apply(null, children);
        }
    }

}

var d = Arg.dom;


