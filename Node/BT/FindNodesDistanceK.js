// This is an input class. Do not edit.
class BinaryTree {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function findNodesDistanceK(tree, target, k) {
    const parents = {};
    findTheParents(tree, parents);
    const targetNode = findTheTargetNode(target, tree, parents);
    return kDistanceAway(targetNode, parents, k);
}

function findTheParents(node, parents, parent = null) {
    if (node != null) {
        parents[node.value] = parent;
        findTheParents(node.left, parents, node);
        findTheParents(node.right, parents, node);
    }
    return;
}

function findTheTargetNode(target, tree, parents) {
    if (tree.value === target) return tree;
    if (parents[target] != null) {
        if (parents[target].left != null && parents[target].left.value === target) return parents[target].left;
        if (parents[target].right != null && parents[target].right.value === target) return parents[target].right;
    } return null;
}

function kDistanceAway(node, parents, k) {
    let queue = [];
    let visited = new Set();
    let distance = 0;
    let result = [];
    queue.push({ node: node, distance: distance });
    while (queue.length > 0) {
        let current = queue.shift();
        let currentValue = current.node.value
        if (current.distance > k) break;
        if (visited.has(currentValue)) continue;
        visited.add(currentValue);
        if (parents[currentValue] != null) queue.push({ node: parents[currentValue], distance: current.distance + 1 });
        if (current.node.left != null) queue.push({ node: current.node.left, distance: current.distance + 1 });
        if (current.node.right != null) queue.push({ node: current.node.right, distance: current.distance + 1 });
        if (current.distance === k) result.push(currentValue);
    }
    return result;
}

// Do not edit the lines below.
exports.BinaryTree = BinaryTree;
exports.findNodesDistanceK = findNodesDistanceK;
