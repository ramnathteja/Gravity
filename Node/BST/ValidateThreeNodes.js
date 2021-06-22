// This is an input class. Do not edit.
class BST {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function validateThreeNodes(nodeOne, nodeTwo, nodeThree) {
    let isNodeTwoDecendentOfNodeOne = findDesendent(nodeOne, nodeTwo);
    if (isNodeTwoDecendentOfNodeOne) {
        return findDesendent(nodeTwo, nodeThree);
    } else {
        let isNodeTwoDecendentOfNodeThree = findDesendent(nodeThree, nodeTwo);
        if (isNodeTwoDecendentOfNodeThree) {
            return findDesendent(nodeTwo, nodeOne);
        }
    }
    return false;
}

function findDesendent(nodeOne, nodeTwo) {
    let node = nodeOne;
    while (node!= null) {
        if (node.value === nodeTwo.value) return true;
        if (node.value < nodeTwo.value) {
            node = node.right;
        } else {
            node = node.left;
        }
    }
    return false;
}