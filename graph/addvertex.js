class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  /** 인접그래프 점 추가 */
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }
  /** 인접그래프 엣지 추가 */
  addEdge(v1, v2) {
    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1);
  }
  /** 인접그래프 엣지 삭제 */
  removeEdge(v1, v2) {
    this.adjacencyList[v1] = this.adjacencyList[v1].filter((v) => v !== v2);
    this.adjacencyList[v2] = this.adjacencyList[v2].filter((v) => v !== v1);
  }
  /** 인접그래프 점 삭제 */
  removeVertex(vertex) {
    const list = this.adjacencyList[vertex];
    for (var i = 0; i < list.length; i++) {
      removeEdge(vertex, list[i]);
    }
    delete this.adjacencyList[vertex];
  }
}
