class BellmanFordSolution {
	constructor(nodes) {
		this.nodes = nodes;
		this.edges = [];
	}

	addEdge(u, v, w) {
		this.edges.push([u, v, w]);
	}

	getShortestPath(source) {
		this.dist = new Array(this.nodes).fill(Infinity);
		this.dist[source] = 0;

		for (let i = 0; i < this.nodes; i++) {
			for (let edgNo = 0; edgNo < this.edges.length; edgNo++) {
				const u = this.edges[edgNo][0];
				const v = this.edges[edgNo][1];
				const w = this.edges[edgNo][2];
				if (
					this.dist[u] != Infinity &&
					this.dist[v] > this.dist[u] + w
				) {
					this.dist[v] = this.dist[u] + w;
				}
			}
		}
		let isNegativeCyclePresent = false;
		for (let edgNo = 0; edgNo < this.edges.length; edgNo++) {
			const u = this.edges[edgNo][0];
			const v = this.edges[edgNo][1];
			const w = this.edges[edgNo][2];
			if (this.dist[u] != Infinity && this.dist[v] > this.dist[u] + w) {
				isNegativeCyclePresent = true;
				break;
			}
		}

		if (isNegativeCyclePresent) return 'Negative cycle detected';
		else return this.dist;
	}
}

function getExample() {
	const g = new BellmanFordSolution(5);
	g.addEdge(0, 1, -1);
	g.addEdge(0, 2, 4);
	g.addEdge(1, 2, 3);
	g.addEdge(1, 3, 2);
	g.addEdge(1, 4, 2);
	g.addEdge(3, 2, 5);
	g.addEdge(3, 1, 1);
	g.addEdge(4, 3, -3);
	// negative weight cycle
	g.addEdge(2, 0, -10);
	return g;
}

function main() {
	const g = getExample();
	const dist = g.getShortestPath(0);
	console.log('shortest path distances: ', dist);
}
main();
