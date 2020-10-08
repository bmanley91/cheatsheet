class QueueExample<T> {
    private static class QueueNode<T> {
        private T data;
        private QueueNode<T>;

        public QueueNode<T>(T data) {
            this.data = data;
        }
    }

    private QueueNode<T> first;
    private QueueNode<T> last;

    public void add(T data) {
        QueueNode<T> node = new QueueNode(data);
        if (last != null) {
            last.next = node;
        }

        last = node;

        if (first == null) {
            first = last;
        }
    }

    public T dequeue() {
        if (first == null) return null;

        T data = first.data;
        first = first.next;

        if (first == null) {
            last = null;
        }

        return data;
    }

    public T peek() {
        if (first == null) return null;
        return first.data;
    }

    public boolean isEmpty() {
        return first == null;
    }
}