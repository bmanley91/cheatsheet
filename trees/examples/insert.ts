function insert(data: Number, root: BinaryTreeNode): void {
    const newNode = new BinaryTreeNode(data, null, null);

    // If there's no root, create one and we're done.
    // If there is a root, we need to figure out where our new node goes.
    if (!root) {
        root = newNode;
    } else {
        insertNewNode(root, newNode);
    }
}


function insertNewNode(node: BinaryTreeNode, newNode: BinaryTreeNode) {
    // If our new data is less than the current node's value, we look to the left.
    // Otherwise, we look to the right.
    if (newNode.data < node.data) {
        // If there's no left child and the new data is less than the current node's value
        // Then we insert the new node as the left child of the current node.
        if (!node.left) {
            node.left = newNode;
        } else {
            // If a left child does exist, we recurse using it.
            insertNewNode(node.left, newNode);
        }
    } else {
        // Logic to traverse the right side of the tree is more or less the same as it is for the left, 
        // but with the direction flipped.
        if (!node.right) {
            node.right = newNode;
        } else {
            insertNewNode(node.right, newNode);
        }
    }
}