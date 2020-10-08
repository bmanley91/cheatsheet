/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
class ListMerger {
    public ListNode mergeKLists(ListNode[] lists) {
        // If the input is empty, short circuit and return null
        if (lists.length == 0) return null;
        
        // Keep track of nodes in a min heap so that we can return them in order
        PriorityQueue minHeap = new PriorityQueue<Integer>();
        
        // Loop over the collection of lists
        for (ListNode list : lists) {
            ListNode currentNode = list;
            while(currentNode != null) {
                minHeap.add(currentNode.val);
                currentNode = currentNode.next;
            }
        }
        
        // Check to make sure that we didn't only have empty lists supplied.
        if (minHeap.peek() == null) return null;
        
        // The value at the top of our heap must be the lowest, so it will be the head of the list that we return.
        ListNode head = new ListNode((int) minHeap.poll());
        ListNode currentNode = head;
        
        // Keep removing values from the heap until it's empty.
        // Since the heap will always have the lowest value on top, we know that our output will be sorted.
        while (!minHeap.isEmpty()) {
            ListNode nextNode = new ListNode((int) minHeap.poll());
            currentNode.next = nextNode;
            currentNode = currentNode.next;
        }
        
        return head;
    }
}