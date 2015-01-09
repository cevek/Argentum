module ag.DOM {
    export function hasInParents(node: Node, searchNode: Node) {
        while (node) {
            node = node.parentNode;
            if (node === searchNode) {
                return true;
            }
        }
        return false;
    }
}