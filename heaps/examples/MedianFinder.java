/**
 * Your MedianFinder object will be instantiated and called as such:
 * MedianFinder obj = new MedianFinder();
 * obj.addNum(num);
 * double param_2 = obj.findMedian();
 */

class MedianFinder {
    // Java PriorityQueues are implemented as Min Heaps.
    // To get a Max Heap, provide Collections.reverseOrder() in the PriorityQueue's constructor to 
    // reverse the order that the queue will sort elements in
    private PriorityQueue<Integer> higher;
    private PriorityQueue<Integer> lower;
    
    /** initialize your data structure here. */
    public MedianFinder() {
        // Use two heaps (PriorityQueues)
        lower = new PriorityQueue<>(); //ascending
        higher = new PriorityQueue<>(Collections.reverseOrder()); //descending
    }
    
    public void addNum(int num) {
        // Always add to min at start
        lower.add(num);
        
        // Bubble the highest thing in the lower to the top
        higher.add(lower.poll());
        
        // Balance if we need to
        if (higher.size() - lower.size() > 1) {
            lower.add(higher.poll());
        }
    }
    
    public double findMedian() {
        // Higher will always have the same or 1 more element than lower
        if (higher.size() == lower.size()) {
            return (double) (higher.peek() + lower.peek()) / 2;
        } else {
            return higher.peek();
        }
    }
}
