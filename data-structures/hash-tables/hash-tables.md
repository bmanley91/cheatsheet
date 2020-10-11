# Hash Tables
A **Hash Table** is a data structure that maps keys to values. A hashing function is use on the keys to figure out where to store or retrieve data from the Hash Table. 

Depending on the size of the table and the hashing function used, as elements are added to a table **collisions** are likely to occur. A collision is when two keys have the same hashed value. Hash Tables can handle collisions, but they wind up increasing the time it takes to perform operations.

Under the hood a Hash Table can be implemented a few difference ways. Here's an example where a Hash Table mapping a string to another string is modelled as an array of Linked Lists - [HashTableExample](examples/HashTableExample.java).

## Operations
Operational complexity for Hash Tables depends on the size of the table and the hashing function used. Under perfect conditions, all operations will take O(1). Realistically, operations can take up to O(n) where n is the number of entries in the table. Operational complexity increases as the number of hashing collisions increases.

| Operation | Complexity (min) | Complexity (max) |
|-----------|------------|------|
| Access    | O(1)    | O(n)  |
| Search    | O(1)    | O(n)  |
| Add       | O(1)    | O(n)  |
| Delete    | O(1)    | O(n)  |