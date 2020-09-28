function inorderTraversal(root: BinaryTreeNode) {
    if (root) {
        // Visit left nodes
        inorderTraversal(root.left);

        // Then visit current node
        visit(root);

        // Then visit right nodes
        inorderTraversal(root.right);
    }
}

function preorderTraversal(root: BinaryTreeNode) {
    if (root) {
        // First visit the current node
        visit(root);

        // Then visit left nodes
        preorderTraversal(root.left);

        // Then visit right nodes
        preorderTraversal(root.right);
    }
}

function postorderTraversal(root: BinaryTreeNode) {
    if (root) {
        // First visit child nodes, left then right.
        postorderTraversal(root.left);
        postorderTraversal(root.right);

        // Then visit current node
        visit(root);
    }
}

function visit(node: BinaryTreeNode) {
    console.log(node.data);
}