/// <reference path="Atom.ts"/>
/// <reference path="Interfaces.ts"/>
/// <reference path="Utils.ts"/>
/// <reference path="Attributes.ts"/>
/// <reference path="Map.ts"/>
/// <reference path="Tag.ts"/>
/// <reference path="When.ts"/>

module Arg {

    export function publicRender(node:Node, treeItem:any) {
        var _treeItem = convertToTree(treeItem);
        _treeItem.parentNode = node;
        render(_treeItem);
        return _treeItem;
    }

    export function render(tree:TreeItem) {
        if (tree.type === TreeType.TAG) {
            renderTag(tree);
        }
        if (tree.type === TreeType.TEXT) {
            renderText(tree);
        }
        if (tree.type === TreeType.MAP) {
            renderMap(tree);
        }
        if (tree.atom) {
            var oldVal = tree.atom.get();
            tree.atom.addListener(newValue=> {
                if (oldVal !== newValue) {
                    var newTree = convertToTree(newValue);
                    newTree.parentNode = tree.parentNode;
                    newTree.nodeBefore = tree.node;
                    render(newTree);
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
        parseTagExpr(tagExpr, treeItem);
        return treeItem;
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


