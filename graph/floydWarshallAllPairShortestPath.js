class FloydWarshall {
	constructor(nodes, isDirected) {
		this.isDirected = isDirected;
		this.nodes = nodes;
		this.adj = new Array(this.nodes);
		for (let i = 0; i < this.nodes; i++) {
			this.adj[i] = new Array(this.nodes);
			for (let j = 0; j < this.nodes; j++) {
				this.adj[i][j] = Infinity;
			}
		}
	}

	addEdge(u, v, w) {
		this.adj[u][v] = w;
		if (!this.isDirected) {
			this.adj[v][u] = w;
		}
	}

	getShortedPath() {
		this.dist = new Array(this.nodes);
		for (let i = 0; i < this.nodes; i++) {
			this.dist[i] = new Array(this.nodes);
			for (let j = 0; j < this.nodes; j++) {
				this.dist[i][j] = this.adj[i][j];
			}
		}

		for (let k = 0; k < this.nodes; k++) {
			for (let u = 0; u < this.nodes; u++) {
				for (let v = 0; v < this.nodes; v++) {
					let ukv = this.dist[u][k] + this.dist[k][v];
					if (this.dist[u][v] > ukv) {
						this.dist[u][v] = ukv;
					}
				}
			}
		}
		return this.dist;
	}
}

function getExample() {
	const isDirected = true;
	const g = new FloydWarshall(4, isDirected);
	g.addEdge(0, 0, 0);
	g.addEdge(0, 1, 5);
	g.addEdge(0, 3, 10);
	g.addEdge(1, 1, 0);
	g.addEdge(1, 2, 3);
	g.addEdge(2, 2, 0);
	g.addEdge(2, 3, 1);
	g.addEdge(3, 3, 0);
	return g;
}
function main() {
	const g = getExample();
	const dist = g.getShortedPath();
	for (let i = 0; i < dist.length; i++) {
		console.log(i + ' ', dist[i]);
	}
}
main();
