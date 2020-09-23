import java.util.Arrays;

class AddOrRemove {
    public static void main(String args[]) {
        // Initial array of size 5.
        int initialArray[] = { 0, 1, 2, 3, 4 };
        System.out.println("Initial Array: " + Arrays.toString(initialArray));

        // Add 5 to the end of the array.
        int arrWithElementAdded[] = addToArray(initialArray, 5);
        System.out.println("Array with element added to end: " + Arrays.toString(arrWithElementAdded));

        // Remove the element at index 2 in the array
        int arrayWithElementRemoved[] = deleteFromArrayAtIndex(initialArray, 2);
        System.out.println("Array with element at index 2 removed: " + Arrays.toString(arrayWithElementRemoved));
    }

    public static int[] addToArray(int inputArray[], int x) {
        // Create a new array with one more slot than the input array.
        int newArrayLenth = inputArray.length + 1;
        int newArray[] = new int[newArrayLenth];

        // Iterate through the input array, adding each element from the input to the new array as we go.
        // We only want to iterate up to the end of the original array so that there's a slot for the new element.
        for (int i = 0; i < inputArray.length; i++) {
            newArray[i] = inputArray[i];
        }

        // Add the new element in the last position of the new array.
        newArray[newArrayLenth - 1] = x;

        return newArray;
    }

    /**
     * Returns a new array with the element at the target index removed from the input array.
     */
    public static int[] deleteFromArrayAtIndex(int inputArray[], int targetIndex) {
        // If the target index is too high, then just return the input.
        if (targetIndex > inputArray.length - 1) {
            return inputArray;
        }

        // Create a new array with one less slot than the input array.
        int newArrayLenth = inputArray.length - 1;
        int newArray[] = new int[newArrayLenth];

        // Iterate through the input array adding each element as we go, unless we're at the target index.
        // Since we'll get to a point where the indexes we're looking at in each array will be different after we delete an element, two pointers are used.
        for (int i = 0 , j = 0; i < inputArray.length; i++) {
            if (i != targetIndex) {
                newArray[j] = inputArray[i];
                j++;
            }
        }

        return newArray;
    }
}