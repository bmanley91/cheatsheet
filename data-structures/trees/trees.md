# Trees
**Trees** are Directed Graphs that consist of a root node with a number of child nodes that may be root nodes of sub Trees. Trees are always heirarchial and non-cyclical. This means that child nodes are "under" parent nodes and that edges never go "up" the tree.

### Terms
* **Root** - The top-most node of the tree
* **Edge** - The connection between two nodes
* **Parent** - The node above a child
* **Child** - A node below a parent
* **Siblings** - Nodes with the same parent
* **Leaf** - A node with no children

Trees can be classified into a few different categories based on how they are structured.

* **Binary** - Each node has up to two child nodes
* **Balanced** - Each leaf node is the same distance from the root
* **Full** - Each parent node has the maximum number of children.
* **Complete** - Every level, except possibly the last is completely filled. If the last level is not full, then it is filled from left to right.
* **Binary Search Tree** - A Binary Tree where the left sub tree only contains elements that are less than their parent and the right subtree only contains elements that are greater than their parent. Both the left and right subtrees must also be Binary Search Trees.
* **Perfect Binary Tree** - All parent nodes have two children and all leaves are the same distance from the root.

## Binary Tree Example
```ts
class BinaryTreeNode {
    data: Number;
    left: BinaryTreeNode;
    right: BinaryTreeNode
}
```

## Operations
Trees can't be simply searched like Linked Lists or Arrays. Adding to and removing from a Tree also requires a bit more work than with other data structures. These code samples show how to perform common operations on a Binary Search Tree.

* [Search](examples/search.ts) - Can be done iteratively or recursively.
* [Insertion](examples/insert.ts)
* [Deletion](examples/delete.ts)
* [Traversal](examples/traversal.ts)

## Practice Problems
| Problem | Solution |
|---|---|
| [Validate BST](https://leetcode.com/problems/validate-binary-search-tree/solution/) | [Solution](https://github.com/bmanley91/practice-problems/blob/main/trees/ValidateBST.java) |