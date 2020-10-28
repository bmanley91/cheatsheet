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

# Practice Problems
| Problem | Solution |
|---|---|
| [Two Sum](https://leetcode.com/problems/two-sum) | [Solution](https://github.com/bmanley91/practice-problems/blob/main/arrays-and-strings/TwoSum.java) |
| [Remove Duplicates from Sorted Array](https://leetcode.com/problems/remove-duplicates-from-sorted-array/) | [Solution](https://github.com/bmanley91/practice-problems/blob/main/arrays-and-strings/RemoveDupliactes.java) |
| [Reverse String](https://leetcode.com/problems/reverse-string/) | [Solution](https://github.com/bmanley91/practice-problems/blob/main/arrays-and-strings/ReverseString.java) |
| [Meeting Rooms](https://leetcode.com/problems/meeting-rooms) | [Solution](https://github.com/bmanley91/practice-problems/blob/main/arrays-and-strings/MeetingRooms.java) |
| [Rotate Array](https://leetcode.com/problems/rotate-array/) | [Solution](https://github.com/bmanley91/practice-problems/blob/main/arrays-and-strings/RotateArray.java) |
| [Max Area of an Island](https://leetcode.com/problems/max-area-of-island/) | [Solution](https://github.com/bmanley91/practice-problems/blob/main/arrays-and-strings/MaxAreaOfIsland.java) ([Failed attempt at using BFS](https://github.com/bmanley91/practice-problems/blob/main/arrays-and-strings/FailedBFSIslands.java)) |
| [First Unique Char](https://leetcode.com/problems/first-unique-character-in-a-string/) | [Solution](https://github.com/bmanley91/practice-problems/blob/main/arrays-and-strings/FirstUniqueChar.java) |
| [Number of Islands](https://leetcode.com/problems/number-of-islands/) | [Solution](https://github.com/bmanley91/practice-problems/blob/main/arrays-and-strings/CountIslands.java) |
| [Best Time to Buy/Sell](https://leetcode.com/problems/best-time-to-buy-and-sell-stock/) | [Solution](https://github.com/bmanley91/practice-problems/blob/main/arrays-and-strings/BuySellStock.java) |
| [Best Time to Buy/Sell 2](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/) | [Solution](https://github.com/bmanley91/practice-problems/blob/main/arrays-and-strings/BuySellStock2.java) |
| [Best Time to Buy/Sell 3](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iii/) | [Solution](https://github.com/bmanley91/practice-problems/blob/main/arrays-and-strings/BuySellStock3.java) |
| [Most Common Word](https://leetcode.com/problems/most-common-word/) | [Solution](https://github.com/bmanley91/practice-problems/blob/main/arrays-and-strings/MostCommonWord.java) |
| [Single Row Keyboard](https://leetcode.com/problems/single-row-keyboard/) | [Solution](https://github.com/bmanley91/practice-problems/blob/main/arrays-and-strings/SingleRowKeyboard.java) |
| [Plus One](https://leetcode.com/problems/plus-one/) | [Solution](https://github.com/bmanley91/practice-problems/blob/main/arrays-and-strings/PlusOne.java) |
| [Longest Palindrome](https://leetcode.com/problems/longest-palindromic-substring/) | [Solution](https://github.com/bmanley91/practice-problems/blob/main/arrays-and-strings/LongestPalindrome.java) |
| [Champagne Tower](https://leetcode.com/problems/champagne-tower/) | [Solution](https://github.com/bmanley91/practice-problems/blob/main/arrays-and-strings/ChampagneTower.java) |
| [Summary Ranges](https://leetcode.com/problems/summary-ranges/) | [Solution](https://github.com/bmanley91/practice-problems/blob/main/arrays-and-strings/SummaryRanges.java) |