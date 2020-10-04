class Queue<T> {
    private store: T[] = [];

    enqueue(val: T) {
      this.store.push(val);
    }

    dequeue(): T | undefined {
      return this.store.shift();
    }

    isEmpty(): boolean {
        return this.store.length === 0;
    }
  }