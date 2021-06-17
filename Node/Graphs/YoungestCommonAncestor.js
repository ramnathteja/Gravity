// This is an input class. Do not edit.
class AncestralTree {
    constructor(name) {
        this.name = name;
        this.ancestor = null;
    }
}

function getYoungestCommonAncestor(topAncestor, descendantOne, descendantTwo) {
    // Write your code here.
    if (topAncestor === descendantOne || topAncestor === descendantTwo) return topAncestor;
    if(descendantOne === descendantTwo.ancestor) return descendantOne;
    if(descendantTwo === descendantOne.ancestor) return descendantTwo;
    familyTreeOne = getFamilyTree(descendantOne);
    familyTreeTwo = getFamilyTree(descendantTwo);
    return youngestLink(familyTreeOne, familyTreeTwo);
}


function getFamilyTree(node, tree=[]) {
    while(node!=null) {
        tree.push(node);
        node = node.ancestor;
        getFamilyTree(node, tree);
    }
    return tree;
}

function youngestLink(treeOne, treeTwo) {
    let linkOne = treeOne.pop();
    let linkTwo = treeTwo.pop()
    let currentYoungest = linkOne;
    while(linkOne === linkTwo) {
        currentYoungest = linkOne
        linkOne = treeOne.pop();
        linkTwo = treeTwo.pop();
    }
    return currentYoungest;
}

// Do not edit the lines below.
  exports.AncestralTree = AncestralTree;
exports.getYoungestCommonAncestor = getYoungestCommonAncestor;
