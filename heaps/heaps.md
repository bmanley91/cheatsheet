# Heaps 
A **Max Heap** is a specific type of balanced binary tree in which the value of each parent node is larger than its children. A **Min Heap** is the opposite, a tree in which each parent's value is smaller than that of its children.

Heaps typically have two main operations `insert` and `extract_max` (`extract_min` for a Min Heap).

## Insertion
To add a value to a Max Heap:

1. Add a new node with the given value to the bottom-most, left-most position in the tree.
2. Compare the value of the new node with its parent.
3. If the value of the node is greater than its parent's, swap them.
4. Repeatedly compare the node with its parent until either its value is less than the parent's or until it is the root node of the tree.

Insertion into a heap can take up to `O(log n)` time.

Insertion into a Min Heap follows the same process, but swapping occurs when the child has a value that is less than that of its parent.

## Extraction
To extract the maximum value from a Max Heap:

1. Capture the value of the current root so it can be returned.
2. Replace the root node with the bottom-most, right-most node. 
3. Check the value of the new root node's children, if either is greater, swap the new root node with the greater child node.
4. Repeat until Heap property holds.
5. Return the saved max value from step 1.

Extraction from a heap usually takes `O(log n)` time.

## Examples
Heaps are useful for when you need to merge datasets in ascending or decending order or need to keep track of a running minimum or maximum (or both in the case of a running median).
* [MedianFinder](examples/MedianFinder.java)