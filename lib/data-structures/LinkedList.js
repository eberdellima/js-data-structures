
class LinkedList {

  /**
   * Initializes a new LinkedList with a null head
   * and a tail that points to the head
   * IMPORTANT: Do not manually change the initialization values
   */
  constructor() {
    this._head = null
    this._tail = this._head 
  }

  /**
   * Inserts a new item at the begining of the list
   * @param {*} value 
   */
  insertToHead(value) {
    try {
      const node = createNode(value)
      node.next = this._head
      this._head = node
      if(this.isEmpty()) {
        this._tail = this._head
      }
    } catch(err) {
      throw new Error(err)
    }
  }

  /**
   * Inserts a new item at the end of the list
   * @param {*} value 
   */
  insertToTail(value) {
    try {
      if(this.isEmpty()) {
        this.insertToHead(value)
        return
      }
      const node = createNode(value)
      this._tail.next = node
      this._tail = node
    } catch(err) {
      throw new Error(err)
    }
  }

  /**
   * Removes and returns the first item of the list
   * @returns {*}
   */
  removeHead() {
    try {
      if(this.isEmpty()) {
        return null
      }
      const node = this._head
      this._head = this._head.next
      node.next = null
      return node
    } catch(err) {
      throw new Error(err)
    }
  }

  /**
   * Removes and returns the last item of the list
   * @returns {*}
   */
  removeTail() {
    try {
      if(this.isEmpty()) {
        return null
      }
      const node = this._head
      while(node.next && node.next.next){
        node = node.next
      }
      const previousTail = this._tail
      this._tail = node
      this._tail.next = null
      return previousTail
    } catch(err) {
      throw new Error(err)
    }
  }

  /**
   * Returns the value of the first node of the list
   * @returns {*}
   */
  peekHead() {
    try {
      if(this.isEmpty()) {
        return null
      }
      const value = this._head && this._head.value
      return value
    } catch(err) {
      throw new Error(err)
    }
  }

  /**
   * Returns the value of the last node of the list
   * @returns {*}
   */
  peekTail() {
    try {
      if(this.isEmpty()){
        return null
      }
      const value = this.tail && this._tail.value
      return value
    } catch(err) {
      throw new Error(err)
    }
  }

  /**
   * Checks if the list is empty
   * @returns {Boolean} 
   */
  isEmpty() {
    try {
      return (this._tail === this._head || this._head === null)
        ? true
        : false
    } catch(err) {
      throw new Error(err)
    }
  }

}

/**
 * Creates a new node object with a "value" and "next" property
 * @param {*} value 
 * @returns {{value: *, next: null}}
 */
function createNode(value) {
  return {
    value,
    next: null
  }
}

module.exports = LinkedList
