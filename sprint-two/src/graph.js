

// Instantiate a new graph
var Graph = function() {
  this.storage = {};
  this.remove = {};

};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  var key = ((Object.keys(this.storage).length) + 1);
  this.storage[node] = [];
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  for (i in this.storage) {
    if (Number(i) === node) {
      return true;
    }
  }
  return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  for (i in this.storage) {
    index = this.storage[i].indexOf(node);
    if (index !== -1) {
      this.storage[i].splice(index,1);
    }
    if (Number(i) === node) {
      this.remove[i] = Number(i);
      delete this.storage[i];
      // return this.remove[i];
    }
  }
  return false;
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  for (node in this.storage) {
    if (Number(node) === fromNode) {
      return (this.storage[node].indexOf(toNode) !== -1);
    }
    // for ( edge in this.storage[node].edges) {
    //   if(this.storage[node].edges[edge])
    // }
  }
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  for (i in this.storage) {

    if (Number(i) === fromNode) {
      this.storage[i].push(toNode);
    }
    if (Number(i) === toNode) {
      // this.storage[i].edges.push(fromNode);
      this.storage[i].push(fromNode);
    }
  }
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  for (i in this.storage) {

    if (Number(i) === fromNode) {
      var index = this.storage[i].indexOf(toNode);
      this.storage[i].splice(index, 1);
    }
    if (Number(i) === toNode) {
      // this.storage[i].edges.push(fromNode);
      var index = this.storage[i].indexOf(fromNode);
      this.storage[i].splice(index, 1);
    }
  }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  var key = (Object.keys(this.storage));
  // var slice = key.slice();
  for (i in key) {
    // slice[i] = cb(slice[i]);
    cb(Number([key[i]]));
    // delete this.storage[key[i]];
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


