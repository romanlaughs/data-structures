var BinarySearchTree = function(value) {

  var newBiTree = Object.create(biTreeMethods);

  newBiTree.left = null,
  newBiTree.right = null;
  newBiTree.value = value;

  return newBiTree;

};

var biTreeMethods = {};

biTreeMethods.insert = function(value) {
  if (value === undefined) {
    return 'error';
  }

  if (value > this.value && this.right === null) {
    this.right = new BinarySearchTree(value);
  } else if (value > this.value) {
    this.right.insert(value);
  } else if (value < this.value && this.left === null) {
    this.left = new BinarySearchTree(value);
  } else if (value < this.value) {
    this.left.insert(value);
  }
  return this;
};

biTreeMethods.contains = function(value) {
  if (value === undefined) {
    return 'error';
  }

  if (this.value === value) {
    return true;
  } else if (this.value > value && this.left !== null) {
    return this.left.contains(value);
  } else if (this.value < value && this.right !== null) {
    return this.right.contains(value);
  }
  return false;


};

biTreeMethods.depthFirstLog = function(target) {
  if (target === undefined) {
    return 'error';
  }
  target(this.value);
  if (this.left) {
    this.left.depthFirstLog(target);
  }
  if (this.right) {
    this.right.depthFirstLog(target);
  }
  return this;
};




/*
 * Complexity: What is the time complexity of the above functions?
 */
//"insert", "contains", and "depthFirstLog