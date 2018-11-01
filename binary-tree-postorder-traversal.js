function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
const postorderTraversal = (root) => {
  if (!root) return [];

  const results = [];
  const stack = [];
  let current = root;
  // traversal(root, results);
  while (current || stack.length) {
    while (current) {
      stack.push(current);
      stack.push(current);
      current = current.left;
    }

    current = stack.pop();
    if (current === stack[stack.length - 1]) {
      current = current.right;
    } else {
      results.push(current.val);
      current = null;
    }
  }

  return results;
};

const traversal = (root, results) => {
  if (!root) return;

  traversal(root.left, results);
  traversal(root.right, results);
  results.push(root.val);
};

const t = {
  val: 1,
  right: {
    val: 3,
    right: {
      val: 7,
      right: null,
      left: null
    },
    left: {
      val: 6,
      left: null,
      right: null
    }
  },
  left: {
    val: 2,
    right: {
      val: 5,
      right: null,
      left: null
    },
    left: {
      val: 4,
      right: null,
      left: null
    }
  }
};
console.log(postorderTraversal(t));
