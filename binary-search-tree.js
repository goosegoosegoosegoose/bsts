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
    let newNode = new Node(val);
    let current = this.root;

    if (!this.root) return this.root = newNode;
    while (current) {
      if (val === current.val) {
        console.log("value already exists");
        break;
      }
      if (val < current.val) {
        if (!current.left) {
          return current.left = newNode;
        }
        current = current.left;
      } else {
        if (!current.right) {
          return current.right = newNode;
        }
        current = current.right;
      }
    }
  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val, node=this.root) {
    const newNode = new Node(val);
    if (!this.root) { 
      return this.root = newNode;
    }

    if (node.val === val) {
      console.log("value already exists");
      return;
    }
    if (val < node.val) {
      if (!node.left) {
        return node.left = newNode;
      } else {
        return this.insertRecursively(val, node.left);
      }
    } else {
      if (!node.right) {
        return node.right = newNode;
      }else {
        return this.insertRecursively(val, node.right);
      }
    }
  }
  // how are you supposed to recursively call something without a changing parameter?
  // added node parameter, not sure if it can be done otherwise

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    if (!this.root) throw Error("Empty tree");
    let current = this.root;
    while (current) {
      if (val === current.val) return current;
      if (!current.left && !current.right) return undefined;
      if (val < current.val) {
        if (!current.left) return undefined;
        current = current.left;
      } else {
        if (!current.right) return undefined;
        current = current.right;
      }
    }
  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val, node=this.root) {
    if (!this.root) throw Error("Empty tree");
    let current = node;

    if (current.val === val) return current;
    // why no work

    if (!current.left && !current.right) return undefined;
    if (current.val > val) {
      if (!current.left) {
        return undefined;
      }
      this.findRecursively(val, current.left)
    } else {
      if (!current.right) {
        return undefined;
      }
      this.findRecursively(val, current.right)
    }
  }
  // why is the equality conditional not firing I'm going insane

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder(node=this.root, arr=[]) {
    if (!this.root) throw Error("Empty tree");
    arr.push(node.val);
    if (node.left) this.dfsPreOrder(node.left, arr);
    if (node.right) this.dfsPreOrder(node.right, arr);
    return arr;
  }
  // maybe i have to do recursion

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder(node=this.root, arr=[]) {
    if (!this.root) throw Error("Empty tree");
    if (node.left) this.dfsInOrder(node.left, arr);
    arr.push(node.val);
    if (node.right) this.dfsInOrder(node.right, arr);
    return arr;
  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder(node=this.root, arr=[]) {
    if (!this.root) throw Error("Empty tree");
    if (node.left) this.dfsPostOrder(node.left, arr);
    if (node.right) this.dfsPostOrder(node.right, arr);
    arr.push(node.val);
    return arr;
  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {
    if (!this.root) throw Error("Empty tree");
    let stack = [this.root];
    let arr = [];
    while (stack.length) {
      let current = stack.shift();
      arr.push(current.val);
      if (current.left) stack.push(current.left);
      if (current.right) stack.push(current.right)
    }
    return arr;
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

// let binarySearchTree = new BinarySearchTree();
// binarySearchTree.insert(15);
// binarySearchTree.insert(20);
// binarySearchTree.insert(10);
// binarySearchTree.insert(12);
// binarySearchTree.insert(1);
// binarySearchTree.insert(5);
// binarySearchTree.insert(50);
// console.log(binarySearchTree.bfs());

module.exports = BinarySearchTree;
