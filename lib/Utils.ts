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
}