function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var increasingBST = function(root) {
  if (!root) return [];

  const stack = [];
  let current = root;
  let tree = null;

  while (current || stack.length) {
    while (current) {
      stack.push(current);
      current = current.right;
    }

    current = stack.pop();
    const prevTree = tree ? { ...tree } : null;
    tree = new TreeNode(current.val);
    tree.right = prevTree;
    current = current.left;
  }

  return tree;
};

const t = {
  val: 5,
  right: {
    val: 6,
    right: {
      val: 8,
      right: {
        val: 9,
        left: null,
        right: null
      },
      left: {
        val: 7,
        left: null,
        right: null
      }
    },
    left: null
  },
  left: {
    val: 3,
    right: {
      val: 4,
      right: null,
      left: null
    },
    left: {
      val: 2,
      right: null,
      left: {
        val: 1,
        left: null,
        right: null
      }
    }
  }
};

console.log(increasingBST(t));
