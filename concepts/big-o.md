# Big O
([showtime](https://www.youtube.com/watch?v=G9xzhyp431c&ab_channel=DualAngelicus))

**Big O** notation is used to describe how the runtime of an algorithm scales with input size. It can be used in reference to either **Time** or **Space Complexity**.

* **Time Complexity** - How many operations does the algorithm execute.
* **Space Complexity** - How much memory does the algorithm use.

## Examples
Below are some common Big O values in increasingly complex order.

### O(1) - Constant
O(1) means that no matter how large an input is, the processing time and memory usage do not change.

```ts
function printInput(input: any) {
    console.log(input);
}

function getFirst(arr: Number[]) {
    return arr[0];
}
```

### O(log n) 
O(log n) is commonly used to describe algorithms that follow a [Divide and Conquer](divide-and-conquer/divide-and-conquer.md) approach, or one that deals with slicing an input into smaller and smaller parts. Binary Search of a sorted list.

```ts
const list = [1, 2, 3, 99, 100];
console.log(search(list, 99));

function search(list: number[], target: number): number {
    return binarySearch(list, target, 0, list.length);
}

function binarySearch(input: number[], target: number, left: number, right: number): number {
    if (left > right) return - 1;

    const mid = Math.floor((left + right) / 2);
    console.log(mid);

    if (input[mid] > target) {
        return binarySearch(input, target, left, mid - 1);
    } else if (input[mid] < target) {
        return binarySearch(input, target, mid + 1, right);
    } else {
        return mid;
    }
}
```

### O(n) - Linear
An `O(n)` algorithm touches each element in a input. A linear algorithm will take 5 times as much time or memory for an input of size 50 than it would for an input of size 10.

```ts
function findSum(input: Number[]) {
    let sum = 0;
    input.each((num) => sum += num);
    return sum;
}
```

### O(n²) - Quadratic
`O(n²)` describes when code is executed n times for each element in a data set of size n. A common example of quadratic Time Complexity is nesting loops.

```ts
function printSums(input: Number[]) {
    for (let x of input) {
        for (let y of input) {
            console.log(x + y);
        }
    }
}
```

### The Slow Ones
Below are complexities that scale very poorly. If you identify that a solution falls into one of these categories, it's probably not a great one.

#### O(2^n)
`O(2^n)` means each for each addition to the input the complexity doubles. An example of `O(2^n)` complexity is recursively calculating the nth Fibonacci number.
```ts
function recursiveFibonacci(number): number {
    if (number < = 1) return number;
    
    return recursiveFibonacci(number - 1) + recursiveFibonacci(number - 2);
}
```

#### O(n!) - Factorial
The function below will execute `n!` or `n * (n - 1) * ... * 2 * 1` times.
```ts
function nFactorial(n: Number) {
    for (let i = 0; i < n; i++) {
        nFactorial(n - 1);
    }
}
```

Other examples of `O(n!)` time are [a brute force solution to the Travelling Salesman Problem](https://en.wikipedia.org/wiki/Travelling_salesman_problem) and [finding all permutations of a string](https://stackoverflow.com/a/4240323).

## Notes
* Typically constants aren't used in Big O notation
  * For example if an algorithm requires a data set to be iterated over twice, it's runtime would be described as `O(n)` not `O(n + n)` or `O(2n)`. 
  * Even though constants are typically dropped, they can be useful when talking about the complexity of an algorithm. Looping over a data set once is probably faster than looping over it twice.
* [A cheat sheet visualizing how different common Big O cases scale](https://www.bigocheatsheet.com/)
