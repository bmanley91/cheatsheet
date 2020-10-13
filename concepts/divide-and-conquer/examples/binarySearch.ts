const list = [1, 2, 3, 99, 100];
console.log(search(list, 99));

/**
 * A function that will return the index of the target value in a sorted array of numbers.
 * 
 * @param list 
 * @param target 
 */
function search(list: number[], target: number): number {
    return binarySearch(list, target, 0, list.length);
}

function binarySearch(input: number[], target: number, left: number, right: number): number {
    // If we get here, that means we've run out of data because target wasn't in the input.
    if (left > right) return - 1;

    // Find the midpoint of our current data set.
    // Floor is used so that we don't try to find the 2.5th index of the data
    const mid = Math.floor((left + right) / 2);

    // If the middle of our data is greater than the target, we need to look at the left side of the data.
    // If the middle of our data is less than the target, we need to look at the right side of the data.
    // Otherwise, we must have found the target at the midpoint so return the index of the midpoint.
    if (input[mid] > target) {
        // Search the left half of the data
        // Left is the all of the elements from the beginning of the set we're currently looking to the element just before the current mid.
        return binarySearch(input, target, left, mid - 1);
    } else if (input[mid] < target) {
        // Search the right half of the data
        // Right is all of the elements from the element just after the current mid to the last element of the set we're currently looking at.
        return binarySearch(input, target, mid + 1, right);
    } else {
        return mid;
    }
}