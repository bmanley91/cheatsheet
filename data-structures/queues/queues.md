# Queues
A **Queue** is a group of elements where the oldest element is accessible. Think of people waiting in line at a cash register. The person who is next in line will be the next one called. This type of ordering is called **first-in-first-out (FIFO)**.

Queues are very similar to stacks, but with opposite ordering. Queues typically have four operations which are similar to, but slightly different from Stack operations:
* **add** - Add an item to the *end* of the queue.
* **remove** - Remove and return the element at the front of the Queue. Sometimes called **dequeue**.
* **peek** - Return the element at the front of the Queue without removing it.
* **isEmpty** - Return true if there are no elements in the Queue or false otherwise.

Operation | Complexity | Explaination                                                                                   |
|-----------|------------|------------------------------------------------------------------------------------------------|
| Access    | O(n)       | To find an element at a given index (position) in a Queue, you'll need to iterate through the Queue, dequeuing elements as you go. |
| Search    | O(n)       | Similar to accessing in a Queue, to search for a given value, you need to dequeue elements from of the Queue until you find your target. |
| Add       | O(n)       | Adding an element to the end of a Queue involves traversing through all of the elements until you reach the end, then placing the new element there. Think of putting something at the end of a Linked List. |
| Delete    | O(1)       | Removing an element from a Queue only involves updating the front of the queue to the next element. |

## Notes
* If a Queue is implemented using a Linked List where you have access to the tail node, then addition can be `O(1)`.

## Examples
* [Example Queue Implementation](examples/QueueExample.java)