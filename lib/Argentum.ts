/// <reference path="Atom.ts"/>
/// <reference path="Interfaces.ts"/>
/// <reference path="HTMLAttrs.ts"/>
/// <reference path="Utils.ts"/>
/// <reference path="Attributes.ts"/>
/// <reference path="Map.ts"/>
/// <reference path="Tag.ts"/>
/// <reference path="When.ts"/>
/// <reference path="form/FormElement.ts"/>
/// <reference path="form/Checkbox.ts"/>
/// <reference path="form/FormInput.ts"/>

module Arg {
    export var enableAtoms = true;
    export var ns = ()=>Arg;

    export var cssDom:HTMLStyleElement = null;
    export var createdCSSRules:{[idx: string]: boolean} = {};

    export function publicRender(node:Node, treeItem:any) {

        if (!cssDom) {
            cssDom = document.createElement("style");
            cssDom.type = "text/css";
            document.head.appendChild(cssDom);
        }

        var _treeItem = convertToTree(treeItem);
        _treeItem.parentNode = node;
        render(_treeItem);
        return _treeItem;
    }

    export function render(tree:TreeItem) {
        if (tree.component && (tree.component.isBlock || tree.component.isBlock === void 0)) {
            if (!createdCSSRules[tree.tag]) {
                cssDom.sheet.insertRule(tree.tag + '{display: block}', 0);
                createdCSSRules[tree.tag] = true;
            }
        }
        if (tree.type === TreeType.TAG) {
            renderTag(tree);
        }
        if (tree.type === TreeType.TEXT) {
            renderText(tree);
        }
        if (tree.type === TreeType.MAP) {
            renderMap(tree);
        }

        if (tree.type === TreeType.WHEN) {
            renderWhen(tree);
        }
    }

    export function dom(tagExpr:string, ...children:any[]) {
        if (children[0] && children[0].constructor === Object) {
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

    export function root(tagExpr:string, ...children:any[]):TreeItem {
        children.unshift(tagExpr.replace(/^[^.\[\#]+/, 'root'));
        return dom.apply(null, children);
    }
}

import d = Arg.dom;


