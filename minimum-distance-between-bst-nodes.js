const minDiffInBST = (root) => {
  const values = [root.val];
  const diffs = [];
  traversal(root, values);

  for (let i = 0; i < values.length; i++) {
    for (let j = i + 1; j < values.length; j++) {
      diffs.push(Math.abs(values[i] - values[j]));
    }
  }
  return Math.min(...diffs);
};

const traversal = (root, arr) => {
  if (root.left) {
    arr.push(root.left.val);
    traversal(root.left, arr);
  }
  if (root.right) {
    arr.push(root.right.val);
    traversal(root.right, arr);
  }
};

const t = {
  val: 4,
  right: {
    val: 6,
    right: null,
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
  val: 90,
  right: null,
  left: {
    val: 69,
    right: {
      val: 89,
      right: null,
      left: null
    },
    left: {
      val: 49,
      right: {
        val: 52,
        left: null,
        right: null
      },
      left: null
    }
  }
};

console.log(minDiffInBST(t1));
