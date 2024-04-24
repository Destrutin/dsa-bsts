class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    if (this.root === null) {
      this.root = new Node(val);
      return this;
    }

    let current = this.root;

    while (current) {
      if (val < current.val) {
        if (current.left === null) {
          current.left = new Node(val);
          return this;
        } else {
          current = current.left;
        }
      } else if (val > current.val) {
        if (current.right === null) {
          current.right = new Node(val);
          return this;
        } else {
          current = current.right;
        }
      }
    }

  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val, current = this.root) {
    if (this.root === null) {
      this.root = new Node(val);
      return this;
    }

    // let current = this.root;
    if (val < current.val) {
      if (current.left === null) {
        current.left = new Node(val);
        return this;
      }
      return this.insertRecursively(val, current.left);
    } else {
      if (current.right === null) {
        current.right = new Node(val);
        return this;
      }
      return this.insertRecursively(val, current.right);
    }
  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    let current = this.root;
    let found = false;

    if (val === current.val) {
      return current;
    }

    while (current && !found) {
      console.log(current);
      if (val < current.val) {
        current = current.left;
      } else if (val > current.val) {
        current = current.right;
      } else {
        found = true;
      }
    }

    if (!found) {
      return undefined;
    }
    return current;
  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val, current = this.root) {
    if (current === null) {
      return undefined;
    }

    if (val < current.val) {
      if (current.left === null) {
        return undefined;
      }
      return this.findRecursively(val, current.left); 
    } else if (val > current.val) {
      if (current.right === null) {
        return undefined;
      }
      return this.findRecursively(val, current.right);
    }

    return current;
  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder(current = this.root) {
    if (current === null) {
      return [];
    }

    let nodes = [];

    nodes.push(current.val);
    nodes = nodes.concat(this.dfsPreOrder(current.left));
    nodes = nodes.concat(this.dfsPreOrder(current.right));

    return nodes;
  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder(current = this.root) {
    if (current === null) {
      return [];
    }

    let nodes = [];

    nodes = nodes.concat(this.dfsInOrder(current.left));
    nodes.push(current.val);
    nodes = nodes.concat(this.dfsInOrder(current.right));

    return nodes;
  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder(current = this.root) {
    if (current === null) {
      return [];
    }

    let nodes = [];

    nodes = nodes.concat(this.dfsPostOrder(current.left));
    nodes = nodes.concat(this.dfsPostOrder(current.right));
    nodes.push(current.val);

    return nodes;
  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {
     let current = this.root;
     let queue = [];
     let nodes = [];
    
     queue.push(current);

     while (queue.length) {
      current = queue.shift();
      nodes.push(current.val);
      if (current.left) {
        queue.push(current.left);
      }
      if (current.right) {
        queue.push(current.right);
      }
     }
     return nodes;
  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {

  }

  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  isBalanced() {

  }

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  findSecondHighest() {
    
  }
}

module.exports = BinarySearchTree;
