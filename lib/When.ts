module ag{
    export function when(condition:Atom<any>, callback:()=>any):TreeItem;
    export function when(condition:()=>any, callback:()=>any):TreeItem;
    export function when(condition:any, callback:()=>any):TreeItem {
        var atomCondition:Atom<any> = condition;
        if (condition.constructor === Function) {
            var getter:IAtomGetter<any> = condition;
            atomCondition = new Atom<any>(ag, getter, {name: 'whenCondition'});
        }
        else if (condition.constructor !== Atom) {
            atomCondition = new Atom<any>(ag, null, {value: condition, name: 'whenCondition'});
        }

        return new TreeItem({
            type: TreeType.WHEN,
            whenCondition: atomCondition,
            whenCallback: callback
        });
    }
}
module ag.internal {
    export interface IWhenCallback {
        (): TreeItem;
    }

    export function renderWhen(tree:TreeItem) {
        tree.node = document.createComment("/if");
        (<any>tree.node).tree = tree;
        tree.parentNode.insertBefore(tree.node, tree.nodeBefore);
        if (tree.type === TreeType.ATOM) {
            var child = TreeItem.convertToTree(tree.whenCondition.get());
        }
        if (tree.type === TreeType.WHEN) {
            var child = tree.whenCondition.get() ? TreeItem.convertToTree(tree.whenCallback()) : null;
        }
        tree.children = child ? [child] : null;
        if (child) {
            child.parentNode = tree.parentNode;
            child.nodeBefore = tree.node;
            child.parentTree = tree;
            render(child);
        }
        if (ag.enableAtoms) {
            tree.whenCondition.addListener(renderWhenListener, ag, tree);
        }
    }

    export function renderWhenListener(value:any, tree:TreeItem) {
        if (tree.type === TreeType.WHEN) {
            removeTreeChildren(tree);
            if (value) {
                var sub_tree = convertToTree(tree.whenCallback());
                sub_tree.parentNode = tree.parentNode;
                sub_tree.nodeBefore = tree.node;
                sub_tree.parentTree = tree;
                tree.children = sub_tree ? [sub_tree] : null;
                render(sub_tree);
            }
        }
        if (tree.type === TreeType.ATOM) {
            // optimizing for textcontent
            if (tree.children && tree.children[0] && tree.children[0].type === TreeType.TEXT &&
                ((value && !value.render && value.constructor !== Function &&
                value.constructor !== Array && value.constructor !== Atom) || !value)) {
                var text = value !== null && value !== void 0 ? value : '';
                renderTextContent(text, tree.children[0]);
            }
            else {
                removeTreeChildren(tree);
                if (value !== null && value !== void 0) {
                    var sub_tree = convertToTree(value);
                    sub_tree.parentNode = tree.parentNode;
                    sub_tree.nodeBefore = tree.node;
                    sub_tree.parentTree = tree;
                    tree.children = sub_tree ? [sub_tree] : null;
                    render(sub_tree);
                }
            }
        }
    }
}