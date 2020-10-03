# Graphs
**Graphs** are a non-linear collection of elements which can be linked to other elements in the group. Graphs are made up of nodes, sometime called verticies, and edges. The node holds data and the edges point to related nodes.

Edges can be Directed or Undirected. Directed Edges are like one way streets, you can only travel in one direction. Undirected edges are like two way streets, you can go back and forth between two points.

## Operations
Operations on a Graph can be a bit more complicated than their counterparts for other data strcutures.

* **Insertion** - Declaring a new node is fairly simple - you just initialize the node with whatever data it contains. Getting the node positioned in the Graph takes a bit more work. You need to find each of the bordering nodes and then create edges on both the neighbors and the new node.
* **Removal** - A node can effectively be removed from a Graph by finding the target node and removing it's edges. Then finding any nodes that point to the target node and removing the target from the neighbors' edges.
* **Search** - Common search processes for Graphs are Depth First Search (DFS) and Breadth First Search (BFS).
  * **DFS** - Starting at an arbitrary node, keep going down a branch until you reach a node you've already visited or a dead end. Then back track and repeat the process for unchecked nodes. Repeat this process until the target is found or all reachable nodes have been visited.
  * **BFS** - Starting at an arbitrary node, visit all neighbors before moving on to their neighbors. Repeat this process until the target is found or all reachable nodes have been visited.

## Examples
* [Sample Graph](examples/graph.ts)