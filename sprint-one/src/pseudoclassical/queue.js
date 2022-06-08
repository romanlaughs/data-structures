var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.popped = {};
  this.frontOfQue = 1;
};

Queue.prototype.enqueue = function(value) {
  var key = ((Object.keys(this.storage).length) + this.frontOfQue);
  this.storage[key] = value;
};

Queue.prototype.dequeue = function() {
  this.popped.item = this.storage[this.frontOfQue];
  delete this.storage[this.frontOfQue];
  this.frontOfQue++;
  return this.popped.item;
};

Queue.prototype.size = function() {
  return Object.keys(this.storage).length;
};


