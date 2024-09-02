const Graph = require('./AGraph');

class ShortestDistanceInUndirected extends Graph {
	constructor(nodes, isDirected) {
		super(nodes, isDirected);
	}

	findShortestDistanceUsingBFS(source) {
		this.visited = new Array(this.nodes).fill(false);
		this.dist = new Array(this.nodes).fill(Infinity);
		this.bfsUtil(source, this.visited, this.dist);
		return {
			dist: this.dist,
			visited: this.visited
		};
	}

	bfsUtil(source, visited, dist) {
		let q = [source];
		dist[source] = 0;

		while (q.length > 0) {
			const u = q.shift();
			visited[u] = true;
			for (let i = 0; i < this.adj[u].length; i++) {
				const v = this.adj[u][i];
				if (dist[v] > dist[u] + 1) {
					dist[v] = dist[u] + 1;
				}
				if (!visited[v]) {
					q.push(v);
				}
			}
		}
	}
}

function getExample() {
	const isDirected = false;
	const g = new ShortestDistanceInUndirected(10, isDirected);
	g.addEdge(0, 1);
	g.addEdge(1, 2);
	g.addEdge(2, 3);
	g.addEdge(3, 4);
	g.addEdge(4, 5);
	g.addEdge(5, 6);
	g.addEdge(6, 7);
	// cycle node
	g.addEdge(2, 8);
	g.addEdge(8, 5);
	g.addEdge(5, 7);
	return g;
}

function main() {
	const g = getExample();
	const resp = g.findShortestDistanceUsingBFS(0);
	console.log('shortest path visited: ', resp.visited);
	console.log('shortest path distances: ', resp.dist);
}

main();
