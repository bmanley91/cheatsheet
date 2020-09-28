class BinaryTreeNode {
    data: Number;
    left: BinaryTreeNode;
    right: BinaryTreeNode;

    constructor(data: Number, left: BinaryTreeNode, right: BinaryTreeNode) {
        this.data = data;
        this.left = left;
        this.right = right;
    }
}

function recursiveSearch(target: Number, node: BinaryTreeNode): BinaryTreeNode {
    if (!node || node.data === target) return node;

    if (node.data < target) {
        return recursiveSearch(target, node.left);
    } else {
        return recursiveSearch(target, node.right);
    }
}

function iterativeSearch(target: Number, node: BinaryTreeNode): BinaryTreeNode {
    let currentNode = node;
    while (currentNode) {
        if (currentNode.data === target) {
            return currentNode;
        } else if (currentNode.data < target) {
            currentNode = currentNode.left;
        } else {
            currentNode = currentNode.right;
        }
    }
    return currentNode;
}