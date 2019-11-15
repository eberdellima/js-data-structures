class Tree {

  constructor() {
    this._root = null
  }

  add(value) {
    try {
      if (!this._root) {
        this._root = new Node(value)
        return
      }

      let currentNode = this._root
      while (true) {
        if (currentNode.value > value) {
          if (currentNode.left) {
            currentNode = currentNode._left
          } else {
            currentNode._left = new Node(value)
            return
          }
        } else {
          if (currentNode._right) {
            currentNode = currentNode._right
          } else {
            currentNode._right = new Node(value)
            return
          }
        }
      }
    } catch (err) {
      throw new Error(err)
    }
  }

  getRoot() {
    try {
      return this._root
    } catch (err) {
      throw new Error(err)
    }
  }

  _findMinNode(node) {
    try {
      if (!node) {
        return null
      }

      if (node.left === null) {
        return node
      }

      return this.findMinNode(node.left)
    } catch (err) {
      throw new Error(err)
    }
  }

  contains(value) {
    try {
      let currentNode = this._root
      while (currentNode) {
        if (currentNode._value === value) {
          return true
        }

        currentNode = value <= currentNode._value ? currentNode._left : currentNode._right
      }
      return false
    } catch (err) {
      throw new Error(err)
    }
  }

  remove(value) {
    try {
      this._root = this._removeNode(this._root, value)
    } catch (err) {
      throw new Error(err)
    }
  }

  _removeNode(node, value) {
    try {

      if(node === null) {
        return null;
      } else if (value < node._value) {
        node.left = this.removeNode(node.left, value);
        return node;
      } else if (value > node._value) {
        node.right = this.removeNode(node.right, value);
        return node;
      } else {

        if (node.left === null && node.right === null) {
          node = null;
          return node;
        }

        if (node.left === null) {
          node = node.right;
          return node;
        }

        if (node.right === null) {
          node = node.left;
          return node;
        }

        var aux = this.findMinNode(node.right);
        node._value = aux._value;

        node.right = this.removeNode(node.right, aux._value);
        return node;
      }
    } catch (err) {
      throw new Error(err)
    }
  }

  isEmpty() {
    try {
      return this._root ? false : true
    } catch (err) {
      throw new Error(err)
    }
  }

}

class Node {
  constructor(value, left = null, right = null) {
    this._value = value
    this._right = right
    this._left = left
  }
}


module.exports = Tree