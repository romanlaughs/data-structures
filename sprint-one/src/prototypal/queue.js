var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var object = Object.create(queueMethods);
  object.storage = {};
  object.popped = {};
  object.frontOfQue = 1;
  return object;
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


