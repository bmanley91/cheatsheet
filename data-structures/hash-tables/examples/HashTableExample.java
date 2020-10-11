public class HashTableExample {
    // Size of the array that will be our "table"
    private int size;

    // The "table" that will hold our data
    private HashTableEntry[] table;

    HashTableEntry(int size) {
        this.size = size;
        this.table = new HashTableEntry[size];
    }

    public String get(key) {
        int slot = hashingFunction(key);
        HashTableEntry entry = table[slot];

        // If there's nothing in the table slot then don't try to iterate.
        if (entry != null) {
            // Iterate through the list until we find the right key or reach the end of the list.
            while (entry != null) {
                if (entry.key.equals(key)) {
                    // If we find the target, return to exit early.
                    return entry.value;
                }
                entry = entry.next;
            }
        }

        // If we get this far, then there was no entry for the target key.
        return null;
    }

    public void put(key, value) {
        int slot = hashingFunction(key);

        // First we need to see if there's already a list started at the index.
        String currentEntry = this.table[slot];

        // If a list isn't started, create a new node in the slot and we're done.
        if (currentEntry == null) {
            this.table[slot] = new HashTableEntry(key, value);
        } else {
            // If a list is already started in the slot,
            // we need to figure out where in the list to put our new value.
            rehash(currentEntry, key, value);
        }
    }
    
    private int hashingFunction(String key) {
        return key.hashCode() % this.size;
    }

    private void rehash(HashTableEntry entry, String key, String value) {
        // We need to keep track of both the current and previous node
        HashTableEntry current = entry;
        HashTableEntry previous;

        // Iterate through the list of nodes
        while (current != null) {
            previous = entry;
            current = current.next;

            // If we find the key while traversing the list, 
            // then update the value of that node and exit.
            if (current.key.equals(key)) {
                current.value = value;
                return;
            }
        }

        // If we got this far then we did not encounter the key in the list yet.
        // We need to create a new entry in the list with the given key and value.
        previous.next = new HashTableEntry(key, value);
    }
}

class HashTableEntry {
    String key;
    String value;
    HashTableEntry next;

    HashTableEntry(String key, String value) {
        this.key = key;
        this.value = value;
    }
}