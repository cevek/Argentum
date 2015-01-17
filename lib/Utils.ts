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

    export function flattenArray(arr:Object[], startPos = 0) {
        var ret:Object[] = [];
        for (var i = startPos; i < arr.length; i++) {
            if (arr[i] && arr[i].constructor === Array) {
                ret = ret.concat(flattenArray(<Object[]>arr[i]));
            }
            else {
                ret.push(arr[i]);
            }
        }
        return ret;
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

    export function copy(attrs:any, extendsAttrs:any) {
        attrs = attrs || {};
        if (extendsAttrs) {
            var keys = Object.keys(extendsAttrs);
            for (var i = 0; i < keys.length; i++) {
                var attr = keys[i];
                if (extendsAttrs[attr] && extendsAttrs[attr].constructor === Object &&
                    attrs[attr] && attrs[attr].constructor === Object) {
                    copy(attrs[attr], extendsAttrs[attr]);
                }
                else {
                    attrs[attr] = extendsAttrs[attr];
                }
            }
        }
        return attrs;
    }
}