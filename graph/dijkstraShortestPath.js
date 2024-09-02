const Graph = require('./AGraph');

class DijkstraSolution extends Graph {
	constructor(nodes, isDirected) {
		super(nodes, isDirected);
	}

	getShortestPath(source) {
		this.dist = new Array(this.nodes).fill(Infinity);
		this.sptSet = new Set();
		this.dist[source] = 0;

		while (this.sptSet.size < this.nodes) {
			let u = this.getMinVertex();
			this.sptSet.add(u);
			for (let i = 0; i < this.adj[u].length; i++) {
				const pair = this.adj[u][i];
				const v = pair[0];
				const w = pair[1];
				if (this.dist[v] > this.dist[u] + w) {
					this.dist[v] = this.dist[u] + w;
				}
			}
		}

		return this.dist;
	}

	getMinVertex() {
		let minValue = Infinity;
		let minValIndex = -1;
		for (let i = 0; i < this.dist.length; i++) {
			if (!this.sptSet.has(i) && this.dist[i] <= minValue) {
				minValIndex = i;
				minValue = this.dist[i];
			}
		}
		return minValIndex;
	}
}

function getExample() {
	const isDirected = true;
	const g = new DijkstraSolution(5, isDirected);
	g.addEdge(0, 1, 3);
	g.addEdge(1, 2, 1);
	g.addEdge(0, 2, 1);
	g.addEdge(2, 3, 4);
	g.addEdge(0, 3, 5);
	return g;
}

function main() {
	const g = getExample();
	const dist = g.getShortestPath(0);
	console.log('shortest path distances: ', dist);
}
main();
