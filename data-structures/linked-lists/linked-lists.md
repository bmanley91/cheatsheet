# Linked Lists
**Linked Lists** are a linear collections of nodes that consist of data and a pointers to other nodes. They are essentially a specific type of [Directed Graph](../graphs/graphs.md).

Typical flavors of Linked List are **Singly** Linked Lists which have a pointer only to the next node, and **Doubly** Linked Lists which have a pointer to both the previous and next node. Here are some examples of a what node in each type of Linked List could look like.

### Singly Linked Node
```ts
class ListNode {
    data: Number;
    next: ListNode;
}
```

### Doubly Linked Node
```ts
class ListNode {
    data: Number;
    next: ListNode;
    previous: ListNode;
}
```

When talking about Linked Lists, two node distinctions are commonly used, **Head**, the first node of the list, and **Tail**, the last node of the list.

Unlike Arrays, elements (nodes) of a Linked List are not necessarily stored together in memory. This leads to some advantages and disadvantages. On the plus side this means resizing is pretty easy. Adding or removing a node just requires updating some pointers. The downside is that nodes in a Linked List cannot be accessed by index. To find the 5th node in a Linked List, you have to first iterate through the first 4 nodes. 

### Finding the value of the 5th node
```ts
// List is initialized up here

ListNode currentNode = head;
for (let i = 0; i < 5; i++) {
    if (!currentNode) return null;

    currentNode = currentNode.next;
}

return currentNode.data;
```

## Operations

 Operation | Complexity | Explaination                                                                                   |
|-----------|------------|------------------------------------------------------------------------------------------------|
| Access    | O(n)       | To find an element at a given index (position) in a Linked List, you need to hit each node until you're at your target. |
| Search    | O(n)       | Similar to accessing in a Linked List, to search for a given value, you need to hit each element until you find your target. |
| Add       | O(1)       | Adding a node only requires setting the `next` pointer for the new node to the `next` pointer of the previous node and the `next` pointer of a previous node to the new node. |
| Delete    | O(1)       | Deleting is similar to addition. It only requires updating the `next` pointer of the previous node to the target node's `next`. |

### Notes 
* Inserting and deleting at a given position in a Linked List are _actually_ going to wind up being `O(n)`. This is because you will need to scan to a certain point in the list, then perform the addition/deletion operation.
* Typically when dealing with Linked Lists, you'll only be given the head of the list. It's worth asking if you also have access to the tail or length of the list.

## Examples
* [Singly Linked List](examples/SinglyLinkedList.java)

# Practice Problems
| Problem | Solution |
|---|---|
| [Delete Node](https://leetcode.com/problems/delete-node-in-a-linked-list/) | [Solution](https://github.com/bmanley91/practice-problems/blob/main/linked-list/DeleteNode.java) |
| [Reverse Linked List](https://leetcode.com/problems/reverse-linked-list/) | [Solution](https://github.com/bmanley91/practice-problems/blob/main/linked-list/ReverseLinkedList.java) |
| [Plus One Linked List](https://leetcode.com/problems/plus-one-linked-list/) | [Solution]() |
