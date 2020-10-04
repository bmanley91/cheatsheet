class Vertex {
    data: number;
    edges: Vertex[];
    visited: boolean;

    constructor(data: number) {
        this.data = data;
        this.edges = [];
    }
}

/**
 * A Directed Graph Structure
 */
class Graph {
    adjacencyList: Vertex[];

    /**
     * Adds a vertex to the list of nodes. Does not constuct any edges.
     * @param newVertex 
     */
    addVertex(newVertex: Vertex): boolean {
        if (this.adjacencyList.find(e => e.data === newVertex.data)) {
            return true;
        }

        this.adjacencyList.push(newVertex);
        return true;
    }

    /**
     * Add an edge between two nodes
     * @param vertex1 
     * @param vertex2 
     */
    addEdge(vertex1: Vertex, vertex2: Vertex): boolean {
        // Add an edge from vertex1 to vertex 2
        const oneToTwo = this.adjacencyList.find(e => e.data === vertex1.data);
        oneToTwo.edges.push(vertex2);

        // Add an edge from vertex2 to vertex1
        const twoToOne = this.adjacencyList.find(e => e.data === vertex2.data);
        twoToOne.edges.push(vertex1);

        return true;
    }

    /**
     * Remove an edge between two nodes
     * @param vertex1 
     * @param vertex2 
     */
    removeEdge(vertex1: Vertex, vertex2: Vertex) {
        // Find a node and set its edges to the current list of edges with the other node filtered out.

        // Remove vertex2 from the edges of vertex1
        this.adjacencyList.find(e => e.data === vertex1.data).edges =
            this.adjacencyList.find(e => e.data === vertex1.data).edges
                .filter(v => v !== vertex2);

        // Remove vertex1 from the edges of vertex2
        this.adjacencyList.find(e => e.data === vertex2.data).edges =
            this.adjacencyList.find(e => e.data === vertex2.data).edges
                .filter(v => v !== vertex1);
        
        return true;
    }

    /**
     * Search for a target value in the Graph following a DFS approach.
     * 
     * @param root 
     * @param target 
     */
    depthFirstSearch(root: Vertex, target: number): void {
        if (!root) return null;

        this.visit(root, target);

        root.visited = true;
        root.edges.forEach(vertex => {
            if (!vertex.visited) {
                this.depthFirstSearch(vertex, target);
            }
        });
    }

    breadthFirstSearch(root: Vertex, target: number): void {
        const queue = new Queue<Vertex>();

        // Add the root node to the queue to start off
        // We mark that we've visited the root already to make sure we don't queue it more than once.
        root.visited = true;
        queue.enqueue(root);

        while (!queue.isEmpty()) {
            // Get the Vertex at the front of the queue and visit it
            const node = queue.dequeue();
            this.visit(node, target);

            node.edges.forEach(n => {
                // Follow the same approach that we did with the root node 
                // for each neighbor that hasn't already been visited.
                // Mark the node, then add it to the queue
                if (!n.visited) {
                    n.visited;
                    queue.enqueue(n);
                }
            })
        }
    }

    /**
     * Helper function to print if we find our target
     * @param node 
     * @param target 
     */
    visit(node: Vertex, target: number): void {
        if (node.data === target) {
            console.log(`Found!`);
        }
    }
}