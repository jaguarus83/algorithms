// @flow
function ListNode(val) {
  this.val = val;
  this.next = null;
}
const splitListToParts = (head, k) => {
  if (!head) return new Array(k).fill(null);

  const length = getLength(head);
  const results = [];

  let chunk = 1;
  let rest = null;

  if (k < length) {
    chunk = Math.ceil(length / k);
    rest = length % k || null;
  }
  
  let j = 1;
  let current = { ...head };
  let list = new ListNode(current.val);

  while (current.next) {
    current = current.next;

    if (j < chunk) {
      pushItemToList(list, current);
      j++;
    } else {
      results.push(list);
      list = new ListNode(current.val);

      if (rest !== null && --rest === 0) {
        chunk -= 1;
        rest = null;
      }

      j = 1;
    }
  }
  
  results.push(list);

  const output =
    k > length ? [...results, ...new Array(k - length).fill(null)] : results;

  return output;
};

const pushItemToList = (list, item) => {
  if (!list.next) {
    list.next = new ListNode(item.val);
  } else {
    pushItemToList(list.next, item);
  }
};

const getLength = (head) => {
  let length = 1;
  let current = { ...head };

  while (current.next) {
    length++;
    current = current.next;
  }

  return length;
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
          next: {
            val: 6,
            next: {
              val: 7,
              next: {
                val: 8,
                next: null
              }
            }
          }
        }
      }
    }
  }
};

console.log(splitListToParts({}, 3));
console.log(splitListToParts(t, 3));
console.log(splitListToParts(t, 4));
console.log(splitListToParts(t, 5));
console.log(splitListToParts(t, 8));
console.log(splitListToParts(t, 11));
