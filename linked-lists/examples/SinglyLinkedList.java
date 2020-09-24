class SinglyLinkedList {
    ListNode head;

    public static void main(String args[]) {
        // Create a LinkedList and get some data in it
        SinglyLinkedList list = new SinglyLinkedList();
        for (int i = 9; i >= 0; i--) {
            list.insert(i);
        }
        list.iterate();
        System.out.println("---");

        int wheres5 = list.searchForValue(5);
        System.out.println(wheres5);
        System.out.println("---");
        
        list.deleteAtIndex(5);
        list.iterate();
    }

    /**
     * Insert a node containing the given data at the start of the list.
     */
    public void insert(int data) {
        head = new ListNode(data, this.head);
    }

    /**
     * Remove the node at the target index.
     */
    public void deleteAtIndex(int targetIndex) {
        if (targetIndex == 0) {
            head = head.next;
            return;
        }

        ListNode currentNode = head;
        ListNode previousNode = null;
        int currentIndex = 0;
        
        while(currentNode != null) {
            if (currentIndex == targetIndex) {
                previousNode.next = currentNode.next;
                currentNode.next = null;
            }
            currentIndex++;
            previousNode = currentNode;
            currentNode = currentNode.next;
        }
    }

    /**
     * Visit each node in the list in order.
     */
    public void iterate() {
        ListNode node = this.head;
        while(node != null) {
            System.out.println(node.data);
            node = node.next;
        }
    }

    /**
     * Return the index of the target value, or -1 if the value is not found.
     */
    public int searchForValue(int target) {
        int index = 0;
        ListNode node = this.head;

        while (node != null) {
            if (node.data == target) {
                return index;
            }
            node = node.next;
            index++;
        }

        return -1;
    }
}

class ListNode {
    public int data;
    public ListNode next;

    ListNode(int data, ListNode next) {
        this.data = data;
        this.next = next;
    }
}