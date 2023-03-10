var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    if (value === undefined) {
      return 'error';
    }

    if (this.head === null) {
      this.head = Node(value);
      this.tail = this.head;
    } else {
      this.tail.next = Node(value);
      this.tail = this.tail.next;
      this.tail.next = null;
    }
  };

  list.removeHead = function() {
    var removed = this.head.value;
    this.head = this.head.next;
    return removed;
  };

  list.contains = function(target) {
    var currentIndex = this.head;
    while (currentIndex) {
      if (currentIndex.value === target) {
        return true;
      }
      currentIndex = currentIndex.next;

    }
    return false;
  };

  return list;
};

var Node = function(value, next = null) {
  var node = {};

  node.value = value;
  node.next = next;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


