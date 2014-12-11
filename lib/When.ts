module Arg {
    export interface IWhenCallback {
        (): TreeItem;
    }

    export function wheeen(condition:any, callback:()=>any) {
        var atomCondition:Atom<any> = condition;
        if (condition.constructor === Function) {
            atomCondition = new Atom<any>(condition, null, null, 'Arg.whenCondition');
        }
        if (condition.constructor !== Atom) {
            atomCondition = new Atom<any>(null, null, condition, 'Arg.whenCondition');
        }

        var child = atomCondition.get() ? convertToTree(callback()) : null;
        return new TreeItem({
            type: TreeType.WHEN,
            whenCondition: atomCondition,
            children: child ? [child] : null,
            whenCallback: callback
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
        if (Arg.enableAtoms) {
            tree.whenCondition.addListener(renderWhenListener, tree);
        }
    }


    export function renderWhenListener(condition:boolean, tree:TreeItem) {
        removeTreeChildren(tree);
        if (condition) {
            var sub_tree = convertToTree(tree.whenCallback());
            sub_tree.parentNode = tree.parentNode;
            sub_tree.nodeBefore = tree.node;
            tree.children = sub_tree ? [sub_tree] : null;
            render(sub_tree);
        }
    }
}