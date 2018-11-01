function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

/**
 * @constructor
 * @param {TreeNode} root - root of the binary search tree
 */
var BSTIterator = function(root) {
  this.root = root;
  this.values = [];

  const search = (root, values) => {
    if (!root) return;
    values.push(root.val);
    search(root.left, values);
    search(root.right, values);
  };

  search(this.root, this.values);
  this.values.sort((a, b) => a - b);
};

/**
 * @this BSTIterator
 * @returns {boolean} - whether we have a next smallest number
 */
BSTIterator.prototype.hasNext = function() {
  return this.root && this.values.length;
};

/**
 * @this BSTIterator
 * @returns {number} - the next smallest number
 */
BSTIterator.prototype.next = function() {
  return this.values.shift();
};

/**
 * Your BSTIterator will be called like this:
 * var i = new BSTIterator(root), a = [];
 * while (i.hasNext()) a.push(i.next());
 */
const t = {
  val: 4,
  right: {
    val: 7,
    right: {
      val: 6,
      right: null,
      left: null
    },
    left: null
  },
  left: {
    val: 2,
    right: {
      val: 3,
      right: null,
      left: null
    },
    left: {
      val: 1,
      right: null,
      left: null
    }
  }
};
var i = new BSTIterator(t),
  a = [];

while (i.hasNext()) a.push(i.next());

console.log(a);
