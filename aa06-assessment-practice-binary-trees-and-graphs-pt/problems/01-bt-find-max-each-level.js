class TreeNode {
  constructor(value, left, right) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

// Given a tree, find the node with the highest value at each
// level of the tree and return it in an array, with the root at the
// 0th index, and the highest value in the deepest level of the tree
// in the last index.

//        5
//       / \
//      4   7
//     / \   \
//    1   3   2
//       /    / \
//      8    4   9
//              / \
//             2   4

// Expected Output -> [ 5, 7, 3, 9, 4 ]

function findMaxEachLevel(root) {

  const queue = [root];
  const maxes = [];

  root.level = 0;

  while (queue.length > 0) {
    const curr = queue.shift();

    if (maxes[curr.level]) {
      maxes[curr.level] = Math.max(curr.value, maxes[curr.level]);
    } else {
      maxes.push(curr.value);
    }

    if (curr.left) {
      curr.left.level = curr.level + 1;
      queue.push(curr.left);
    }
    if (curr.right) {
      curr.right.level = curr.level + 1;
      queue.push(curr.right);
    }
  }

  return maxes;
}







// Uncomment the code below for local testing.

// // Build a tree for testing

const simpleTree = new TreeNode(4, null, null);
simpleTree.right = new TreeNode(1, null, null);
simpleTree.left = new TreeNode(3, null, null);
simpleTree.right.right = new TreeNode(2, null, null);

// // Test the function with the debug tree
console.log(findMaxEachLevel(simpleTree)); // -> [ 4, 3, 2 ]

/*******************************************************************************
 * Do not change the code after this line.
 */

try {
  exports.TreeNode = TreeNode;
  exports.findMaxEachLevel = findMaxEachLevel;
} catch (e) {
  module.exports = null;
}
