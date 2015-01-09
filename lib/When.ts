module ag {
    export interface IWhenCallback {
        (): TreeItem;
    }

    export function when(condition:Atom<any>, callback:()=>any):TreeItem;
    export function when(condition:()=>any, callback:()=>any):TreeItem;
    export function when(condition:any, callback:()=>any):TreeItem {
        var atomCondition:Atom<any> = condition;
        if (condition.constructor === Function) {
            var getter:IAtomGetter<any> = condition;
            atomCondition = new Atom<any>(ag, {getter: getter, name: 'whenCondition'});
        }
        else if (condition.constructor !== Atom) {
            atomCondition = new Atom<any>(ag, {value: condition, name: 'whenCondition'});
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
        if (ag.enableAtoms) {
            tree.whenCondition.addListener(renderWhenListener, ag, tree);
        }
    }

    export function renderWhenListener(value:any, tree:TreeItem) {
        removeTreeChildren(tree);
        if (tree.type === TreeType.WHEN && value) {
            var sub_tree = convertToTree(tree.whenCallback());
            sub_tree.parentNode = tree.parentNode;
            sub_tree.nodeBefore = tree.node;
            tree.children = sub_tree ? [sub_tree] : null;
            render(sub_tree);
        }
        /*if (tree.type === TreeType.ATOM && value !== null && value !== void 0) {
            var sub_tree = convertToTree(value);
            sub_tree.parentNode = tree.parentNode;
            sub_tree.nodeBefore = tree.node;
            tree.children = sub_tree ? [sub_tree] : null;
            render(sub_tree);
        }*/
    }
}