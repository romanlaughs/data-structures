var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = []; // fix me
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  if (item === undefined) {
    return 'error';
  }
  if (!this.contains(item)) {
    this._storage.push(item);
  }

};

setPrototype.contains = function(item) {
  if (item === undefined) {
    return 'error';
  }
  for (i in this._storage) {
    if (this._storage[i] === item) {
      return true;
    }
  }
  return false;
};

setPrototype.remove = function(item) {
  var index = (this._storage.indexOf(item));
  this._storage.splice(index, 1);

};

/*
 * Complexity: What is the time complexity of the above functions?
 */
