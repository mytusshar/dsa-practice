const Graph = require('./AGraph');

class CyclicSolution extends Graph {
	constructor(nodes, isDirected) {
		super(nodes, isDirected);
	}

	isCyclic() {
		let parents = new Array(this.nodes).fill(-1);
		let visited = new Array(this.nodes).fill(false);
		for (let i = 0; i < this.nodes; i++) {
			if (!visited[i] && this.isCyclicUtil(i, parents, visited)) {
				return true;
			}
		}
		return false;
	}

	isCyclicUtil(source, parents, visited) {
		let q = [source];
		while (q.length > 0) {
			const u = q.shift();
			visited[u] = true;
			for (let i = 0; i < this.adj[u].length; i++) {
				const v = this.adj[u][i];
				if (visited[v] && parents[u] != v) {
					console.log('Cyclic found at ', v);
					return true;
				} else if (!visited[v]) {
					parents[v] = u;
					q.push(v);
				}
			}
		}
		return false;
	}
}

function getCyclicExampleUndirected() {
	const isDirected = false;
	const g = new CyclicSolution(10, isDirected);
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
	return g;
}

function getNotCyclicExampleUndirected() {
	const isDirected = false;
	const g = new CyclicSolution(4, isDirected);
	g.addEdge(0, 1);
	g.addEdge(1, 2);
	return g;
}

function main() {
	const g1 = getNotCyclicExampleUndirected();
	if (g1.isCyclic()) {
		console.log('G1: Cyclic');
	} else {
		console.log('G1: Not cyclic');
	}

	console.log('==========================');
	const g2 = getCyclicExampleUndirected();
	if (g2.isCyclic()) {
		console.log('G2: Cyclic');
	} else {
		console.log('G2: Not cyclic');
	}
}

main();
