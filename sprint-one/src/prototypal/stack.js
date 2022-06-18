var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var object = Object.create(stackMethods);
  object.storage = {};
  object.popped = {};
  return object;
};

var stackMethods = {
  push(value) {
    var key = ((Object.keys(this.storage).length) + 1);
    this.storage[key] = value;
  },

  pop() {
    this.popped.item = this.storage[Object.keys(this.storage).length];
    delete this.storage[Object.keys(this.storage).length];
    return this.popped.item;
  },

  size() {
    return Object.keys(this.storage).length;
  }
};


