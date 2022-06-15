var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  _.extend(newTree, treeMethods);
  newTree.children = [];

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  this.children.push(Tree(value));
};

treeMethods.contains = function(target) {
  var result = false;
  //Base Case:
  if (this.value === target) {
    result = true;
  } else {
  //Recursive case:
    for (var i = 0; i < this.children.length; i++) {
      result = this.children[i].contains(target);
      if (result === true) {
        return true;
      }
    }
  }
  return result;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */

// Finding - O(n)
// Add - O(1)

