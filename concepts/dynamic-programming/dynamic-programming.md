# Dynamic Programming
**Dynamic Programming (DP)** is the practice of breaking a problem down into sub problems, storing the solutions to these sub problems, and then using stored solutions to answer the original problem. DP is specifically useful when an algorithm would otherwise need to keep computing the same result for a given set of inputs over and over.

## Fibonacci Numbers
A classic DP problem is finding the nth [Fibonacci number](https://en.wikipedia.org/wiki/Fibonacci_number). Here's recursive brute force solution to this problem:
```ts
function findFibonacciNumber(n: number): number {
    if (n <= 1) return n;
    
    return findFibonacciNumber(n - 1) + findFibonacciNumber(n - 2);
}
```
This solution would wind up performing `O(n!)` operations! 

We can use DP to make this much faster. If we look at the recursive solution, we see that there's two sub problems for each Fibonacci number - what's the previous number, and what's the one before that. What if we start from the first and second number and store Fibonacci numbers as we go until find the nth one?

```ts
function findFibonacciNumber(n: number): number {
    // Store the fibonacci numbers that we calculate in an array as we go.
    // We'll add the first two manually.
    const fibonacciNumbers = [];
    fibonacciNumbers[0] = 0;
    fibonacciNumbers[1] = 1;
    
    // Then starting at index 2, we'll keep going until we get to the nth index
    for (let i = 2; i <= n; i++) {
        // Calculate the next fibonacci number by adding the previous two.
        const nextFibonacciNumber = fibonacciNumbers[n - 1] + fibonacciNumbers[n - 2];

        // Then add the next number to the array so it can be used in later calculations
        fibonacciNumbers[n] = nextFibonacciNumber
    }

    // Finally, return the last number in the array, it's the nth Fibonacci number
    return fibonacciNumbers[n];
}
```

## Counting Coins
Another classic DP problem is the "Change Making Problem" which has a few variants. Here's one variant from [Leetcode](https://leetcode.com/problems/coin-change-2/).

> You are given coins of different denominations and a total amount of money. Write a function to compute the number of combinations that make up that amount.

The brute force solution to this problem is slooooooooow. It basically involves calculating every combination of coins that add up to the given value. The time complexity of this approach is `O(amount^n)` where amount is the amount input and n is the number of unique coins. So to figure out how many ways to make 100 from the set of [1, 5, 10, 25], it would take ~100,000,000 operations! We definitely want something faster than that.

Here is a solution to this problem using DP. It probably looks a bit intimidating. Most DP algorithms do IMO. Here's the same solution but with comments explaining what's going on - [ChangeMaker](examples/ChangeMaker.java).

```java
int countChange(int amount, int[] coins) {
    int[] dp = new int[amount + 1];
    dp[0] = 1; 
    
    for (int coin : coins) {
        for (int i = 0; i <= amount; i++) {
            if (coin <= i) {
                dp[i] += dp[i - coin];
            }
        }
    }
    
    return dp[amount];
}
```

Because we're using nested loops, the time complexity of the DP solution is `O(amount * coins.length)`  which is a significant improvement. To use the scenario above of figuring out how many ways you can make 100 from [1, 5, 10, 25], we now only need to perform ~400 calculations.

# Practice Problems
| Problem | Solution |
|---|---|
| [Climbing Stairs](https://leetcode.com/problems/climbing-stairs/) | [Solution](https://github.com/bmanley91/practice-problems/blob/main/dynamic-programming/ClimbingStairs.java) |
| [House Robber](https://leetcode.com/problems/house-robber/) | [Solution](https://github.com/bmanley91/practice-problems/blob/main/dynamic-programming/HouseRobber.java) |
| [House Robber 2](https://leetcode.com/problems/house-robber-ii/) | [Solution](https://github.com/bmanley91/practice-problems/blob/main/dynamic-programming/HouseRobber2.java) |