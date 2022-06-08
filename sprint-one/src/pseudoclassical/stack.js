var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.popped = {};
};

Stack.prototype.push= function(value) {
  var key = ((Object.keys(this.storage).length) + 1);
  this.storage[key] = value;
};

Stack.prototype.pop = function() {
  this.popped.item = this.storage[Object.keys(this.storage).length];
  delete this.storage[Object.keys(this.storage).length];
  return this.popped.item;
};

Stack.prototype.size = function() {
  return Object.keys(this.storage).length;
};


