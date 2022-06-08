var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var queue = {};
  queue.storage = {};
  queue.popped = {};
  queue.frontOfQue = 1;
  _.extend(queue, queueMethods);
  return queue;
};

var queueMethods = {
  enqueue(value) {
    var key = ((Object.keys(this.storage).length) + this.frontOfQue);
    this.storage[key] = value;

  },

  dequeue() {
    this.popped.item = this.storage[this.frontOfQue];
    delete this.storage[this.frontOfQue];
    this.frontOfQue++;
    return this.popped.item;
  },

  size() {
    return Object.keys(this.storage).length;
  }
};


