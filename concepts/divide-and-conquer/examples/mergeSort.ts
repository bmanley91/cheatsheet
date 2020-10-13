/**
 * The main Merge Sort function.
 * 
 * Note that we continuously recurse until we're dealing with single elements before we try to call 
 * mergeSortedLists for the first time. 
 * This is how we get from an unsorted data set to single-element "sorted" data sets that can be merged.
 * 
 * @param head 
 */
const mergeSort = (head: ListNode): ListNode => {
    // Base Case - if head or head.next is null, then our data currently contains zero or one elements.
    // Either way this data is now "sorted" so we just return.
    if (!head || !head.next) return head;
    
    // We'll be recursing through the left AND right halves of our data
    // Left is head to middle
    // Right is middle.next to tail
    const middle = findMiddle(head);
    const middleNext = middle.next;

    // We want to "split" the larger list into two smaller ones 
    // so we need to set middle.next to null
    middle.next = null;

    // Recurse down both sides.
    const left = mergeSort(head);
    const right = mergeSort(middleNext);

    // Merge the sorted datasets
    return mergeSortedLists(left, right);
}

/**
 * Helper function that merges two sorted Linked Lists
 * @param head1 
 * @param head2 
 */
const mergeSortedLists = (head1: ListNode, head2: ListNode): ListNode => {
    // Base Case - If one of the lists is empty, return the other.
    if (!head1) return head2;
    if (!head2) return head1;

    let result: ListNode;

    // The smaller node will be the head of our sorted list
    // We need to recurse to figure out what result.next will be.
    // We recurse using the smaller node's next and the other node
    if (head1.value <= head2.value) {
        result = head1;
        result.next = mergeSortedLists(head1.next, head2);
    } else {
        result = head2;
        result.next = mergeSortedLists(head1, head2.next);
    }

    return result;
}

/**
 * Helper function to find the middle of a linked list given its head node
 * @param head 
 */
const findMiddle = (head: ListNode) => {
    // Base Case - If the list is empty, there's no middle to find.
    if (!head) return head;

    // Two pointer technique
    let slow = head;
    let fast = head;

    while (fast.next && fast.next.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    return slow;
}

class ListNode {
    value: number;
    next: ListNode;

    constructor(value: number, next?: ListNode) {
        this.value = value;
        this.next = next;
    }
}

// Below here are helper functions to illustrate the example.
const addToList = (value: number, head: ListNode): ListNode => {
    return new ListNode(value, head);
}

const printList = (head: ListNode): void => {
    if (head) {
        console.log(head.value);
        printList(head.next);
    }
}

const main = () => {
    let head = new ListNode(5);
    head = addToList(4, head);
    head = addToList(10, head);
    head = addToList(16, head);

    console.log("Unsorted List:");
    printList(head);

    const sortedHead = mergeSort(head);
    console.log("Sorted List:");
    printList(sortedHead);
}

main();