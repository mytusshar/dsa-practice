###### Graphs:

# DFS: depth first search:

Algo:

1. Create a recursive function that takes the index of the node and a visited array.
2. Mark the current node as visited and print the node.
3. Traverse all the adjacent and unmarked nodes and call the recursive function with the index of the adjacent node.
4. For disconnected graph: Run a loop from 0 to the number of vertices and check if the node is unvisited in the previous DFS, then call the recursive function with the current node.

Complexity
Time: O (V + E)
Space: O (V) for storing recursive calls for every vertex.

---------------#########################-----------------########################--------------------

# BFS: breadth first search:

Algo:

1. Declare a queue and insert the starting vertex.
2. Initialize a visited array and mark the starting vertex as visited.
3. Follow the below process till the queue becomes empty:
4. Remove the first vertex of the queue.
5. Mark that vertex as visited.
6. Insert all the unvisited neighbours of the vertex into the queue.
7. For disconnected graph: Run a loop from 0 to the number of vertices and check if the node is unvisited in the previous BFS, then call the recursive function with the current node.

Complexity
Time: O (V + E)
Space: O (V) for storing vertices in queue.

---------------#########################-----------------########################--------------------
