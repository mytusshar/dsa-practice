const Graph = require('./AGraph');

class BipartiteSolution extends Graph {
	constructor(nodes, isDirected) {
		super(nodes, isDirected);
	}

	isBipartiteUsingBFS() {
		const color = new Array(this.nodes).fill(-1);
		for (let i = 0; i < this.nodes; i++) {
			if (color[i] == -1) {
				const isBipartite = this.BFS(i, color);
				if (!isBipartite) {
					console.log('BFS: color: ', color);
					return false;
				}
			}
		}
		console.log('BFS: color: ', color);
		return true;
	}

	BFS(node, color) {
		const q = [];
		q.push(node);
		color[node] = 0;

		while (q.length > 0) {
			const u = q.shift();
			const adjOfU = this.adj[u];
			for (let i = 0; i < adjOfU.length; i++) {
				const v = adjOfU[i];
				if (color[v] == -1) {
					q.push(v);
					color[v] = 1 >> color[u]; // 1 >> 0 = 1  :::: 1 >> 1 = 0
				} else if (color[v] == color[u]) {
					return false;
				}
			}
		}
		return true;
	}

	isBipartiteUsingDFS() {
		const color = new Array(this.nodes).fill(-1);
		for (let i = 0; i < this.nodes; i++) {
			if (color[i] == -1) {
				const isBipartite = this.DFS(i, -1, color);
				if (!isBipartite) {
					console.log('DFS: color: ', color);
					return false;
				}
			}
		}
		console.log('DFS: color: ', color);
		return true;
	}

	DFS(node, parent, color) {
		if (parent == -1) {
			color[node] = 0;
		} else {
			color[node] = 1 >> color[parent];
		}
		const adjOfNode = this.adj[node];
		for (let i = 0; i < adjOfNode.length; i++) {
			const v = adjOfNode[i];
			if (color[v] == -1) {
				const isBipartite = this.DFS(v, node, color);
				if (!isBipartite) return false;
			} else if (color[v] == color[node]) {
				return false;
			}
		}
		return true;
	}
}

function getBipartiteExample() {
	const isDirected = false;
	const g = new BipartiteSolution(10, isDirected);
	g.addEdge(0, 1);
	g.addEdge(1, 2);
	g.addEdge(2, 3);
	g.addEdge(3, 4);
	g.addEdge(4, 5);
	g.addEdge(2, 6);
	g.addEdge(6, 7);
	g.addEdge(7, 5);
	g.addEdge(5, 8);
	g.addEdge(8, 9);
	return g;
}

function getNonBipartiteExample() {
	const isDirected = false;
	const g = new BipartiteSolution(10, isDirected);
	g.addEdge(0, 1);
	g.addEdge(1, 2);
	g.addEdge(2, 3);
	g.addEdge(3, 4);
	g.addEdge(4, 5);
	g.addEdge(2, 6);
	g.addEdge(6, 5);
	g.addEdge(5, 8);
	g.addEdge(8, 9);
	return g;
}

function main() {
	const g1 = getBipartiteExample();
	const g2 = getNonBipartiteExample();

	if (g1.isBipartiteUsingBFS()) console.log('BFS-G1: it is bipartite');
	else console.log('BFS-G1: it is NOT bipartite');

	if (g2.isBipartiteUsingBFS()) console.log('BFS-G2: it is bipartite');
	else console.log('BFS-G2: it is NOT bipartite');

	console.log('======================================');

	if (g1.isBipartiteUsingDFS()) console.log('DFS-G1: it is bipartite');
	else console.log('DFS-G1: it is NOT bipartite');

	if (g2.isBipartiteUsingDFS()) console.log('DFS-G2: it is bipartite');
	else console.log('DFS-G2: it is NOT bipartite');
}

main();
