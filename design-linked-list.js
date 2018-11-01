/**
 * Initialize your data structure here.
 */
var MyLinkedList = function() {
  this.list = null;
};

/**
 * Get the value of the index-th node in the linked list. If the index is invalid, return -1.
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
  return -1;
};

/**
 * Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list.
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
  this.list = {
    val: val,
    next: this.list
  }
  
  console.log(this.list);
};

/**
 * Append a node of value val to the last element of the linked list.
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
  const node = {val: val, next: null};
  
  if (!this.list) return this.list = node;
  
  const nodes = [this.list];
  let list = this.list;
  
  while (list.next) {
    list = list.next;
    nodes.push(list)
  }
  nodes.push(node)
  
  for (let i = nodes.length - 2; i >= 0; i--) {
    nodes[i].next = nodes[i + 1];
  }
  
  this.list = {...nodes[0]};
  
  console.dir(this.list, {depth: 10, colors: true})
};

/**
 * Add a node of value val before the index-th node in the linked list. If index equals to the length of linked list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted.
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {};

/**
 * Delete the index-th node in the linked list, if the index is valid.
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {};

const list = new MyLinkedList();

list.addAtTail(4);
list.addAtHead(5);
list.addAtTail(1);
list.addAtTail(0);

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = Object.create(MyLinkedList).createNew()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
