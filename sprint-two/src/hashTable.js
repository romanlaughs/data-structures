var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  if (v === undefined || k === undefined) {
    return 'error';
  }
  var dup = false;
  var index = getIndexBelowMaxForKey(k, this._limit);
  var newArray = this._storage.get(index);
  if (!newArray) {
    this._storage.set(index, [[k, v]]);
  } else {
    var arr2 = [k, v];
    for (item in newArray) {
      if (newArray[item][0] === k) {
        newArray[item][1] = v;
        dup = true;
      }
    }
    if (!dup) {
      newArray.push(arr2);
    }
    this._storage.set(index, newArray);
  }


};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var newArray = this._storage.get(index);
  for (item in newArray) {
    console.log(item);
    if (newArray[item][0] === k) {
      return newArray[item][1];
    }
  }
  return undefined;
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  this._storage.set(index, undefined);
};






















// var HashTable = function() {
//   this._limit = 8;
//   this._storage = LimitedArray(this._limit);
// };

// HashTable.prototype.insert = function(k, v) {
//   if (k === undefined || v === undefined) {
//     return 'error';
//   }
//   var index = getIndexBelowMaxForKey(k, this._limit);
//   if (this._storage[index] !== undefined && this._storage[index].length > 0) {

//     for (var i = 0; i < this._storage[index].length; i ++) {
//       if (this._storage[index][i][0] === k ) {
//         this._storage[index][i][1] = v;
//         return;
//       }
//     }
//     this._storage[index].push([k, v]);

//   } else {
//     this._storage[index] = [[k, v]];

//   }
// };

// HashTable.prototype.retrieve = function(k) {
//   if (k === undefined) {
//     return 'error';
//   }
//   var index = getIndexBelowMaxForKey(k, this._limit);

//   if (this._storage[index].length > 1) {
//     for (var i = 0; i < this._storage[index].length; i++) {
//       if (this._storage[index][i][0] === k ) {
//         return this._storage[index][i][1];
//       }
//     }
//   }
//   return this._storage[index][0][1];
// };

// HashTable.prototype.remove = function(k) {
//   if (k === undefined) {
//     return 'error';
//   }
//   var index = getIndexBelowMaxForKey(k, this._limit);

//   delete this._storage[index][0][1];
// };




/*
 * Complexity: What is the time complexity of the above functions?
 */


