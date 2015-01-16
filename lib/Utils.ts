module ag {

    export function traverseTree(startTree:TreeItem, callback:(tree:TreeItem)=>any, maxDepth = 0) {
        if (startTree.children) {
            for (var i = 0; i < startTree.children.length; i++) {
                callback(startTree.children[i]);
                if (maxDepth === 0 || maxDepth > 1) {
                    traverseTree(startTree.children[i], callback, maxDepth ? maxDepth - 1 : 0);
                }
            }
        }
    }

    export function removeTreeChildren(tree:TreeItem) {
        if (tree && tree.children) {
            for (var i = 0; i < tree.children.length; i++) {
                tree.children[i].destroy(true);
            }
            tree.children = null;
        }
    }


    export function prepareViewName(name:string) {
        var splits = name.split(/([A-Z][a-z\d_]+)/);
        var words:string[] = [];
        for (var i = 0; i < splits.length; i++) {
            var word = splits[i].toLowerCase();
            if (word && word !== 'view' && word !== 'v') {
                words.push(word);
            }
        }
        return words.join("-");
    }


    export function extendsAttrs(attrs: any, extendsAttrs: any) {
        attrs = attrs || {};
        if (extendsAttrs){
            for (var attr in extendsAttrs) {
                attrs[attr] = extendsAttrs[attr];
            }
        }
        return attrs;
    }

    export function log(param:any) {
        console.log(param);
        return param;
    }
}