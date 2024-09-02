const Graph = require('./AGraph');

class ShortestDistanceInDirected extends Graph {
	constructor(nodes, isDirected) {
		super(nodes, isDirected);
	}

	findShortestDistanceUsingTopoSort(source) {
		let dist = new Array(this.nodes).fill(Infinity);
		let topoStact = this.topoSort();
		this.findShortestDistance(source, dist, topoStact);
		return dist;
	}

	topoSort() {
		let visited = new Array(this.nodes).fill(false);
		let topoStack = [];

		for (let i = 0; i < this.nodes; i++) {
			if (!visited[i]) {
				this.dfsUtil(i, visited, topoStack);
			}
		}
		return topoStack;
	}

	dfsUtil(u, visited, topoStack) {
		visited[u] = true;
		for (let i = 0; i < this.adj[u].length; i++) {
			const pair = this.adj[u][i];
			const v = pair[0];
			if (!visited[v]) {
				this.dfsUtil(v, visited, topoStack);
			}
		}
		topoStack.push(u);
	}

	findShortestDistance(source, dist, topoStact) {
		dist[source] = 0;
		let i = topoStact.length - 1;
		while (i >= 0) {
			const u = topoStact[i];
			if (dist[u] != Infinity) {
				for (let j = 0; j < this.adj[u].length; j++) {
					const pair = this.adj[u][j];
					const v = pair[0];
					const w = pair[1];
					if (dist[v] > dist[u] + w) {
						dist[v] = dist[u] + w;
					}
				}
			}
			i--;
		}
	}
}

function getExample() {
	const isDirected = true;
	const g = new ShortestDistanceInDirected(6, isDirected);
	g.addEdge(0, 1, 2);
	g.addEdge(0, 4, 1);
	g.addEdge(1, 2, 3);
	g.addEdge(4, 2, 2);
	g.addEdge(2, 3, 6);
	g.addEdge(4, 5, 4);
	g.addEdge(5, 3, 1);
	return g;
}

function main() {
	const g = getExample();
	const dist = g.findShortestDistanceUsingTopoSort(0);
	console.log('shortest path distances: ', dist);
}

main();
