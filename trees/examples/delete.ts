function deleteValue(target: Number, node: BinaryTreeNode): BinaryTreeNode {
    if (!node) {
        return null;
    } else if (target < node.data) {
        // If the target is less than the current node's value, we go to the left.
        node.left = deleteValue(target, node.left);
        return node;
    } else if (target > node.data) {
        // If the target is more than the current node's value, we go to the right.
        node.right = deleteValue(target, node.right);
    } else {
        // If the target is found, then we delete it.
        // If the node has no children, we just set it to null.
        if (!node.left && !node.right) {
            node = null;
            return node;
        } 

        // If the node has one child, we replace the current node with that child.
        else if (!node.right) {
            node = node.left;
            return node;
        } else if (!node.left) {
            node = node.right;
            return node;
        }

        // If the node has two children, we replace the value of the current node with the minimum node of the right subtree.
        // Then we remove the minimum node from the tree following the same logic that we've been using.
        // We do this because the minimum node on the right will be larger than all values on the left but smaller than the rest of the values on the right.
        else {
            const minNode = findMinNode(node.right);
            node.data = minNode.data;

            node.right = deleteValue(minNode.data, node.right);
            return node;
        }
    }
}

function findMinNode(node: BinaryTreeNode): BinaryTreeNode {
    // If there's no left node, we must be as low as we can get
    if (!node.left) {
        return node;
    }
    // If there is a left node, keep going to the left.
    return findMinNode(node.left);
}