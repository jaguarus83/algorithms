/**
 * Initialize your data structure here.
 */
var MyHashSet = function() {
  // this.set = '';
  this.set = [];
};

/**
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.add = function(key) {
  if (!this.set.includes(key)) this.set.push(key);
  // const val = '^' + key + '$';
//   if (!this.set.includes(val)) {
//     set += val;
//   }
};

/**
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.remove = function(key) {
  if (this.set.includes(key)) {
    const i = this.set.indexOf(key);
    this.set.splice(i, 1);
  }
  // const val = '^' + key + '$';
//   const index = this.set.indexOf(val);
//   if (~index) {
//     this.set = this.set.slice(0, index) + this.set.slice(index + val.length);
//   }
};

/**
 * Returns true if this set contains the specified element
 * @param {number} key
 * @return {boolean}
 */
MyHashSet.prototype.contains = function(key) {
  return this.set.includes(key);
  // const val = '^' + key + '$';
//   return set.includes(val);
};

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = Object.create(MyHashSet).createNew()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */
