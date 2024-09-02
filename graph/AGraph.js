module.exports = class Graph {
	constructor(nodes, isDirected) {
		this.adj = new Array(nodes);
		this.nodes = nodes;
		this.isDirected = isDirected;

		for (let i = 0; i < this.nodes; i++) {
			this.adj[i] = new Array();
		}
	}

	addEdge(u, v, w) {
		if (w != null || w != undefined) {
			this.adj[u].push([v, w]);
			if (!this.isDirected) {
				this.adj[v].push([u, w]);
			}
		} else {
			this.adj[u].push(v);
			if (!this.isDirected) {
				this.adj[v].push(u);
			}
		}
	}
};
