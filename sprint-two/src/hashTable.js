

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (this._storage[index] !== undefined && this._storage[index].length > 0) {

    for (var i = 0; i < this._storage[index].length; i ++) {
      if (this._storage[index][i][0] === k ) {
        this._storage[index][i][1] = v;
        return;
      }
    }
    this._storage[index].push([k, v]);
  } else {
    this._storage[index] = [[k, v]];
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  if (this._storage[index].length > 1) {
    for (var i = 0; i < this._storage[index].length; i++) {
      if (this._storage[index][i][0] === k ) {
        console.log(this._storage[index][i]);
        return this._storage[index][i][1];
      }
    }
  }
  return this._storage[index][0][1];
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  delete this._storage[index][0][1];
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


