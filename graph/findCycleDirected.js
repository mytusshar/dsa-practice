const Graph = require('./AGraph');
// import { Graph } from './AGraph';
class CyclicSolution extends Graph {
	constructor(nodes, isDirected) {
		super(nodes, isDirected);
	}

	isCyclic() {
		let stackRec = [];
		let visited = [];
		for (let i = 0; i < this.nodes; i++) {
			visited[i] = false;
			stackRec[i] = false;
		}
		for (let i = 0; i < this.nodes; i++) {
			if (this.isCyclicUtil(i, stackRec, visited)) {
				return true;
			}
		}
		return false;
	}

	isCyclicUtil(u, stackRec, visited) {
		if (stackRec[u]) {
			console.log('Cyclic found at: ', u);
			return true;
		}
		if (visited[u]) return false;

		stackRec[u] = true;
		visited[u] = true;
		for (let i = 0; i < this.adj[u].length; i++) {
			if (this.isCyclicUtil(this.adj[u][i], stackRec, visited)) {
				return true;
			}
		}
		stackRec[u] = false;
		return false;
	}
}

function getCyclicExampleDirected() {
	const isDirected = true;
	const g = new CyclicSolution(4, isDirected);
	g.addEdge(0, 1);
	g.addEdge(0, 2);
	g.addEdge(1, 2);
	g.addEdge(2, 3);
	g.addEdge(3, 3);
	return g;
}

function getNotCyclicExampleDirected() {
	const isDirected = true;
	const g = new CyclicSolution(4, isDirected);
	g.addEdge(0, 1);
	g.addEdge(0, 2);
	g.addEdge(1, 2);
	g.addEdge(2, 3);
	return g;
}

function main() {
	const g1 = getNotCyclicExampleDirected();
	if (g1.isCyclic()) {
		console.log('G1: Cyclic');
	} else {
		console.log('G1: Not cyclic');
	}

	console.log('==========================');
	const g2 = getCyclicExampleDirected();
	if (g2.isCyclic()) {
		console.log('G2: Cyclic');
	} else {
		console.log('G2: Not cyclic');
	}
}

main();
