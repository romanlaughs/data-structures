var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var popped = {};

  // Implement the methods below
  someInstance.push = function(value) {
    var key = ((Object.keys(storage).length) + 1);
    storage[key] = value;
  };

  someInstance.pop = function() {
    popped.item = storage[Object.keys(storage).length];
    delete storage[Object.keys(storage).length];
    return popped.item;
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};
