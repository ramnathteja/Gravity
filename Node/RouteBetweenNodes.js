/* Given a directed graph, design an algorithm to find out whether there is a route between two nodes*/
//Depth First Search varient //Breath First Search varient 


//the given inputs are two arrays of length M such that A[k] -> B[k]
// there could be multiple nodes directed from a single node
//there could be isolated island nodes 

class Node { //Node construction 
    constructor(value) {
        this.value = value;
        this.visited = false;
        this.children = [];
    }

    addChild(node) {
        this.children.push(node);
    }

    findTheRoute(nodeB) {
        const nodeA = this;
        if (nodeA.value === nodeB.value) return true;
        while (nodeA.visited != true) {
            nodeA.visited = true;
            for (const child of nodeA.children) {
                if (child.findTheRoute(nodeB)) return true;
            }
        }
        return false;
    }
}

class Graph {
    constructor() {
        this.nodes = []; // need to have store all nodes here to have a reference of what nodes
        //are in the tree.
    }

    getNode(value) {
        return this.nodes.find(node => node.value === value);
    }

    addNodes(nodeValue, edgeValue) {
        let node = this.getNode(nodeValue);
        if (typeof (node) === "undefined") {
            this.nodes.push(new Node(nodeValue));
            node = this.getNode(nodeValue);

        }
        let edge = this.getNode(edgeValue);
        if (typeof (edge) === "undefined") {
            this.nodes.push(new Node(edgeValue));
            edge = this.getNode(edgeValue);
        }
        node.addChild(edge);
    }

}


function solution(arrayA, arrayB, N, M) {
    const graph = new Graph(true);

    for (let i = 0; i < arrayA.length; i++) {
        graph.addNodes(arrayA[i], arrayB[i]);
    }
    const startNode = graph.getNode(N);
    const finishNode = graph.getNode(M);
    if (typeof (startNode) === "undefined" || typeof (finishNode) === "undefined") return false;
    return startNode.findTheRoute(finishNode);
}

let arrayA = [2, 1, 3, 4, 9, 2];
let arrayB = [1, 2, 3, 9, 2, 3];
console.log(solution(arrayA, arrayB, 2, 1));

