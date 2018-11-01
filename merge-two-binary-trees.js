/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

var mergeTrees = function(t1, t2) {
  const results = [];

  if (!t1 && !t2) return results;

  const t = resultTree(t1, t2);
  return t;
};

const resultTree = (t1, t2) => {
  if (!t2 && !t1) {
    return null;
  }

  const t = new TreeNode((t1 ? t1.val : 0) + (t2 ? t2.val : 0));
  t.left = resultTree(t1 ? t1.left : null, t2 ? t2.left : null);
  t.right = resultTree(t1 ? t1.right : null, t2 ? t2.right : null);

  return t;
};

const t1 = {
  val: 1,
  right: {
    val: 2,
    right: null,
    left: null
  },
  left: {
    val: 3,
    right: null,
    left: {
      val: 5,
      right: null,
      left: null
    }
  }
};

const t2 = {
  val: 2,
  right: {
    val: 3,
    right: {
      val: 7,
      right: null,
      left: null
    },
    left: null
  },
  left: {
    val: 1,
    right: {
      val: 4,
      right: null,
      left: null
    },
    left: null
  }
};

console.log(mergeTrees(t1, t2));
console.log(mergeTrees(null, null));
