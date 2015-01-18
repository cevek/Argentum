/// <reference path="Atom.ts"/>
/// <reference path="TreeItem.ts"/>
/// <reference path="Component.ts"/>
/// <reference path="HTML.ts"/>
/// <reference path="HTMLAttrs.ts"/>
/// <reference path="Utils.ts"/>
/// <reference path="Attributes.ts"/>
/// <reference path="Map.ts"/>
/// <reference path="Tag.ts"/>
/// <reference path="When.ts"/>
/// <reference path="DOMUtils.ts"/>
/// <reference path="Animation.ts"/>
/// <reference path="Router.ts"/>
/// <reference path="i18n/en.ts"/>
/// <reference path="i18n/ru.ts"/>
/// <reference path="i18n/i18n.ts"/>
/// <reference path="i18n/number.ts"/>
/// <reference path="i18n/date.ts"/>
/// <reference path="i18n/currency.ts"/>
/// <reference path="components/Dialog.ts"/>
/// <reference path="components/Alert.ts"/>
/// <reference path="components/Tabs.ts"/>
/// <reference path="form/FormElement.ts"/>
/// <reference path="form/Checkbox.ts"/>
/// <reference path="form/Radio.ts"/>
/// <reference path="form/Input.ts"/>
/// <reference path="form/Btn.ts"/>
/// <reference path="form/Select.ts"/>
/// <reference path="form/DatePicker.ts"/>

module ag {
    export var enableAtoms = true;
    export var ns = ()=>ag;

    var cssDom:HTMLStyleElement = null;
    var createdCSSRules:{[idx: string]: boolean} = {};

    export function publicRender(node:Node, treeItem:any) {

        if (!cssDom) {
            cssDom = document.createElement("style");
            cssDom.type = "text/css";
            document.head.appendChild(cssDom);
        }

        var _treeItem = TreeItem.convertToTree(treeItem);
        _treeItem.parentNode = node;
        render(_treeItem);
        return _treeItem;
    }

    export function render(tree:TreeItem) {
        if (tree.component && (tree.component.isBlock || tree.component.isBlock === void 0)) {
            if (!createdCSSRules[tree.componentTag]) {
                (<any>cssDom.sheet).insertRule(tree.componentTag + '{display: block}', 0);
                createdCSSRules[tree.componentTag] = true;
            }
        }
        if (tree.type === TreeType.TAG) {
            internal.renderTag(tree);
        }
        if (tree.type === TreeType.TEXT) {
            internal.renderText(tree);
        }
        if (tree.type === TreeType.MAP) {
            internal.renderMap(tree);
        }

        if (tree.type === TreeType.WHEN || tree.type === TreeType.ATOM) {
            internal.renderWhen(tree);
        }
    }


    export function dom(tagExpr:string, ...children:any[]) {
        if (children[0] && children[0].constructor === Object) {
            var attrs = children.shift();
        }

        if (children && children.constructor === Array) {
            children = flattenArray(children);
        }

        var treeItem = new TreeItem({
            type: TreeType.TAG,
            children: children
        });

        if (!attrs) {
            attrs = {};
        }
        treeItem.attrs = attrs;
        treeItem.parseTagExpr(tagExpr);
        return treeItem;
    }
}


