function maxPathSum(tree) {
    let obj = findMax(tree);
    return obj.maxTriangle;
}

function findMax(node) {
    if (node === null) return { maxBranch: -Infinity, maxTriangle: -Infinity };
    const left = findMax(node.left);
    const right = findMax(node.right);
    const maxBranch = Math.max(left.maxBranch + node.value, right.maxBranch + node.value, node.value);
    const triangle = left.maxBranch + node.value + right.maxBranch;
    const maxTriangle = Math.max(left.maxTriangle, right.maxTriangle, triangle, maxBranch);
    return { maxBranch: maxBranch, maxTriangle: maxTriangle };
}

// Do not edit the line below.
exports.maxPathSum = maxPathSum;
