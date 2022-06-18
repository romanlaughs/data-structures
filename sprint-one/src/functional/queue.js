var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var popped = {};
  var frontOfQue = 1;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    var key = ((Object.keys(storage).length) + frontOfQue);
    storage[key] = value;

  };

  someInstance.dequeue = function() {
    popped.item = storage[frontOfQue];
    delete storage[frontOfQue];
    frontOfQue++;
    return popped.item;
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};

