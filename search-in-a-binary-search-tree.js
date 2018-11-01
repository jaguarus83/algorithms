var searchBST = function(root, val) {
  const results = search(root, val);
  return results || [];
};

const search = (root, val) => {
  if (!root) return null;
  if (root.val === val) return root;
  return val > root.val ? search(root.right, val) : search(root.left, val);
};

const t = {
  val: 4,
  right: {
    val: 7,
    right: {
      val: 7,
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

const t1 = {
  val: 18,
  right: {
    val: 22,
    right: { val: 63, right: [Object], left: null },
    left: null
  },
  left: { val: 2, right: null, left: null }
};

console.log(searchBST(t1, 63));
