class Vertex {
    data: number;
    edges: Vertex[];

    constructor(data: number) {
        this.data = data;
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
}