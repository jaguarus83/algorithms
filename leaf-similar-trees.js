var leafSimilar = function(root1, root2) {
  const arr1 = [];
  const arr2 = [];
  createCosequence(root1, arr1);
  createCosequence(root2, arr2);
  console.log(arr1, arr2);
  return JSON.stringify(arr1) === JSON.stringify(arr2);
};

const createCosequence = (root, arr = []) => {
  if (!root) return;
  if (!root.left && !root.right) return arr.push(root.val);
  // if (!root.left) return createCosequence(root.right, arr);
  // if (!root.right) return createCosequence(root.left, arr);

  createCosequence(root.left, arr);
  createCosequence(root.right, arr);

  return arr;
};

const t1 = {
  val: 3,
  right: {
    val: 1,
    right: { val: 8, right: null, left: null },
    left: { val: 9, right: null, left: null }
  },
  left: {
    val: 5,
    right: { val: 2, right: null, left: null },
    left: { val: 6, right: null, left: null }
  }
};

const t2 = {
  val: 3,
  right: {
    val: 1,
    right: { val: 2, right: null, left: null },
    left: { val: 4, right: null, left: null }
  },
  left: {
    val: 5,
    right: {
      val: 7,
      right: null,
      left: { val: 2, right: null, left: null }
    },
    left: { val: 6, right: null, left: null }
  }
};

console.log(leafSimilar(t1, t2));
