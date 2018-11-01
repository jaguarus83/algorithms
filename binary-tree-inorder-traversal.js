function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

/**
 * @param {TreeNode} root
 * @return {number[]}
 */

const inorderTraversal = (root) => {
  if (!root) return [];

  const results = [];
  const stack = [];
  let current = root;
  // inorder(root, results);
  while (current || stack.length) {
    while (current) {
      stack.push(current);
      current = current.left;
    }

    current = stack.pop();
    results.push(current.val);

    current = current.right;
  }

  return results;
};

const inorder = (root, results) => {
  if (!root) return;

  inorder(root.left, results);
  results.push(root.val);
  inorder(root.right, results);
};

const t = {
  val: 1,
  right: {
    val: 3,
    right: {
      val: 7,
      right: { val: 15, left: null, right: null },
      left: { val: 14, left: null, right: null }
    },
    left: {
      val: 6,
      right: { val: 13, left: null, right: null },
      left: { val: 12, left: null, right: null }
    }
  },
  left: {
    val: 2,
    right: {
      val: 5,
      right: { val: 11, left: null, right: null },
      left: { val: 10, left: null, right: null }
    },
    left: {
      val: 4,
      right: { val: 9, left: null, right: null },
      left: { val: 8, left: null, right: null }
    }
  }
};

console.log(inorderTraversal(t));
