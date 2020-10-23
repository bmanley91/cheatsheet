# Divide and Conquer
**Divide and Conquer** algorithms solve a problem taking a data set and continuously splitting into smaller sets until the problem is easier to solve. Two classic examples of the Divide and Conquer algorithms are Binary Search and Merge Sort.

The name "Divide and Conquer" can be a bit deceiving as it only covers part of the process. A key component of many Divide and Conquer algorithms is to recombine the data after dividing an conquering.


## Examples
### Binary Search
Binary Search works by looking at the midpoint of a sorted data set and comparing it to the target value. If the target is found, we're done, but if it's not we look in the "left" or "right" half of the data based on if the target was lower or higher than the midpoint. This process is repeated, keep checking the midpoint of a smaller and smaller data set until either the target is found or we run out of data.

[Code Example](examples/binarySearch.ts)

### Merge Sort
Merge Sort works by taking two sorted data sets and iterating through them, putting the appropriate element into the result data set ("Merging"). This doesn't seem helpful when looking at a full data set. We can apply this technique by continuously spliting the data set in half until we're working with single elements. You can look at a single element as a sorted list of one element. Once we have these smaller lists, we can "merge" them. 

This can be a bit hard to visualize based just on the text so check out the code example below or this [visualization from Wikipedia](https://en.wikipedia.org/wiki/Merge_sort#/media/File:Merge-sort-example-300px.gif).

[Code Example](examples/mergeSort.ts)

# Practice Problems
| Problem | Solution |
|---|---|
| [Search Array of Unknown Size](https://leetcode.com/problems/search-in-a-sorted-array-of-unknown-size/) | [Solution](https://github.com/bmanley91/practice-problems/blob/main/arrays-and-strings/SearchArrayOfUnknownSize.java) |