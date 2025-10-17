from collections import deque

def bfs(graph, start):
    visited = set()                # keeps track of visited nodes
    queue = deque([start])         # initialize queue with start node

    while queue:
        node = queue.popleft()     # dequeue from left
        if node not in visited:
            print(node, end=" ")   # process the node
            visited.add(node)
            # add unvisited neighbors to queue
            for neighbor in graph[node]:
                if neighbor not in visited:
                    queue.append(neighbor)

# Example graph (Adjacency List)
graph = {
    'A': ['B', 'C'],
    'B': ['D', 'E'],
    'C': ['F'],
    'D': [],
    'E': ['F'],
    'F': []
}

# Run BFS
print("BFS Traversal starting from A:")
bfs(graph, 'A')

