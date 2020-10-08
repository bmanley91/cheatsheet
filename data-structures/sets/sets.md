# Sets
A **Set** is a grouping of unique elements without any specific order. Sets are useful when you want to remove duplicates from a dataset. 

Set operations are typically fast (`O(1)`). Many algorithms that require a bunch of lookups against a single group of elements can be improved by pre-processing the elements into a set as long as you don't care about duplicates or ordering.

Sets are typically implemented using a HashMap, with the elements as keys in the Map. Since Maps require both a key and a value, _something_ needs to be set as the value. This something will vary per implementation, but in Java values are set to a dummy value of `new Object()`.

## Operations
Operation | Complexity | Explaination  |
|-----------|------------|---------|
| Access    | O(n)       | Accessing a Set elements is essentially the same as doing a Map.get(). If an element isn't present in the set, the Map.get() will return null. |
| Add       | O(1)       | Adding an element basically involves performing a Map.put(). |
| Delete    | O(1)       | Just like adding, removal is pretty another Map operation. A Map.remove() is done to delete from a Set. |

### Notes
* Similarly to HashMaps, set operations _can_ technically take `O(n)` due to Hash Collision, but Set operations are commonly accepted as `O(1)`.

## Examples
* [Removing duplicates from an array](examples/removeDupes.ts)