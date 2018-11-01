const rotateRight = (head, k) => {
  if (!head || !head.next) return head;

  let length = 1;
  let current = { ...head };

  while (current.next) {
    length++;
    current = current.next;
  }

  k = k % length;

  for (let i = 0; i < k; i++) {
    head = rotateOnce(head);
  }

  return head;
};

const rotateOnce = (head) => {
  let current = head;
  let prev = head;

  while (current.next) {
    prev = current;
    current = current.next;
  }

  prev.next = null;
  current.next = head;

  return current;
};

const t1 = {
  val: 1,
  next: null
};

const t = {
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

// console.log(rotateOnce(t1));
// console.log(rotateOnce(t));

console.log(rotateRight(null, 5));
console.log(rotateRight(t, 17));
console.log(rotateRight(t1, 3));
