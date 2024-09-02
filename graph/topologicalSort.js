const Graph = require('./AGraph');

class TopologicalSortSolution extends Graph {
	constructor(nodes, isDirected) {
		super(nodes, isDirected);
	}

	topoSort() {
		let visited = new Array(this.nodes).fill(false);
		let topoStack = [];

		for (let i = 0; i < this.nodes; i++) {
			if (!visited[i]) {
				this.dfsUtil(i, visited, topoStack);
			}
		}
		return topoStack.reverse();
	}

	dfsUtil(u, visited, topoStack) {
		visited[u] = true;
		for (let i = 0; i < this.adj[u].length; i++) {
			const v = this.adj[u][i];
			if (!visited[v]) {
				this.dfsUtil(v, visited, topoStack);
				// topoStack.push(v);
			}
		}
		topoStack.push(u);
	}
}

function getExample() {
	const isDirected = true;
	const g = new TopologicalSortSolution(7, isDirected);
	g.addEdge(0, 1);
	g.addEdge(1, 2);
	g.addEdge(2, 3);
	g.addEdge(3, 4);
	g.addEdge(0, 5);
	return g;
}

function main() {
	const g1 = getExample();
	const topoSortArr = g1.topoSort();
	console.log('topoSortArr: ', topoSortArr);
}

main();
