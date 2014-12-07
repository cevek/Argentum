module Arg {
    export interface IWhenCallback {
        (): TreeItem;
    }

    export function wheeen(condition:any, callback:()=>any) {
        var atomCondition:Atom<any> = condition;
        if (condition.constructor === Function) {
            atomCondition = new Atom<any>(condition);
        }
        if (condition.constructor !== Atom) {
            atomCondition = new Atom<any>(null, null, condition);
        }

        var whenCallback = ()=>convertToTree(callback());
        var child = atomCondition.get() ? whenCallback() : null;
        return new TreeItem({
            type: TreeType.WHEN,
            whenCondition: atomCondition,
            children: child ? [child] : null,
            whenCallback: whenCallback
        });
    }

    export function renderWhen(tree:TreeItem) {
        tree.node = document.createComment("/if");
        tree.parentNode.insertBefore(tree.node, tree.nodeBefore);
        if (tree.children && tree.children[0]) {
            tree.children[0].parentNode = tree.parentNode;
            tree.children[0].nodeBefore = tree.node;
            render(tree.children[0]);
        }
        tree.whenCondition.addListener(condition=> {
            renderWhenListener(tree, condition);
        });
    }

    export function renderWhenListener(tree:TreeItem, condition:boolean) {
        removeTreeChildren(tree);
        if (condition) {
            var sub_tree = tree.whenCallback();
            sub_tree.parentNode = tree.parentNode;
            sub_tree.nodeBefore = tree.node;
            tree.children = sub_tree ? [sub_tree] : null;
            render(sub_tree);
        }
    }
}