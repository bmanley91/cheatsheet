# Arrays
An **Array** is a collection of elements which can each be identified and accessed by an index.

```
arr = [0, 1, 2, 3]
```

Array indexes start at zero and go up to `array.length - 1` in most languages (that I use).

Arrays are stored in one block in memory. This means that given the address of the start of an array, and the size of an element, the address of each element can be calculated.
```
address = startAddress + (index * size)
```

Arrays are created with a fixed size. Some languages will automatically resize them for you (e.g. in Javascript `array.push(element)`). Others, like Java won't. Adding an element in these languages will involve some extra code.


## Operations
| Operation | Complexity | Explaination                                                                                   |
|-----------|------------|------------------------------------------------------------------------------------------------|
| Access    | O(1)       | Accessing an element can be done with the formula above. No iteration needed.                  |
| Search    | O(n)       | An array is searched by iterating through and checking each element to see if it's the target. |
| Add       | O(n)       | A new array is created and each element plus the new one is added to the new array. ([example](examples/AddOrRemove.java))           |
| Delete    | O(n)       | Similar to Add, a new array is created and each element is added to it, except the new one. ([example](examples/AddOrRemove.java))    |

# Strings
Strings are often lumped in with Arrays since they share many of the same characteristics. Strings are ordered characters which can be accessed by their indexes. 

A gotcha to look out for when dealing with Strings and Arrays is language specific functions for dealing with them. For example in Java, you get the size of an array with `array.length`, but to do the same for a String you use `string.length()`.