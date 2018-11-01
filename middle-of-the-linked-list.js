function ListNode(val) {
  this.val = val;
  this.next = null;
}

const middleNode = (head) => {
  const nodes = [head];

  while (head.next) {
    head = head.next;
    nodes.push(head);
  }

  let middle = Math.trunc(nodes.length / 2);
  return nodes[middle];
};

const t1 = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      next: {
        val: 4,
        next: {
          val: 5,
          next: null
        }
      }
    }
  }
};

const t2 = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      next: {
        val: 4,
        next: {
          val: 5,
          next: {
            val: 6,
            next: null
          }
        }
      }
    }
  }
};

console.log(middleNode(t1));
console.log(middleNode(t2));
