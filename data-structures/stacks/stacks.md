# Stacks
A **Stack** is a group of elements where the last element that has been added is the first one that is accessible. Think of a stack of plates. You create a stack by putting one plate on top of another. Then when you go to take a plate, you take the top one. This type of ordering is called **last-in-first-out (LIFO)**.

Stacks typically have the following four operations
* **push** - Add an element to the top of the stack.
* **pop** - Remove and return the element at the top of the Stack. The next most recently added element becomes the new top.
* **peek** - Return the element at the top of the Stack without removing it.
* **isEmpty** - Return true if there are no elements in the Stack or false otherwise.

Stacks are useful when you want to keep track of previous elements in order. This can come up in recursive algorithms where you may need to backtrack.

## Operations
Operation | Complexity | Explaination                                                                                   |
|-----------|------------|------------------------------------------------------------------------------------------------|
| Access    | O(n)       | To find an element at a given index (position) in a Stack, you'll need to iterate through the Stack, poping elements as you go. |
| Search    | O(n)       | Similar to accessing in a Stack, to search for a given value, you need to pop elements off of the Stack until you find your target. |
| Add       | O(1)       | Pushing an element to the top of a Stack is like adding a node to the beginning of a Linked List. |
| Delete    | O(1)       | Similar to addition, think of the Stack like a Linked List. Removing the top element only involves updating a pointer. |

## Notes 
* In some languages Arrays have some Stack operations built in. [JS Example](examples/StackUsingArray.js)

## Examples
* [Example Stack Implementation](examples/StackExample.java)
* [A JS Stack Implementation Using an Array](examples/StackUsingArray.js)

# Practice Problems
| Problem | Solution |
|---|---|
| [Asteroid Collisions](https://leetcode.com/problems/asteroid-collision/) | [Solution](https://github.com/bmanley91/practice-problems/blob/main/stacks/AsteroidCollisions.java) |
