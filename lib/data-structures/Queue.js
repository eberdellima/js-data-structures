
class Queue {

  /**
   * Initializes the new queue as an empty object with length of 0
   * and head index of 0
   * IMPORTANT: Do not manually change the initialization values
   */
  constructor() {
    this._storage = {}
    this._length = 0
    this._head = 0
  }

  /**
   * Insert a new item at the end of the queue
   * @param {*} value 
   */
  enqueue(value) {
    try {
      this._storage[this._length + this._head] = value
      this._length++
    } catch(err) {
      throw new Error(err)
    }
  }

  /**
   * Remove the first item from the queue
   */
  dequeue() {
    try {
      if(this.isEmpty) return null

      const firstValue = this._storage[this._head]
      delete this._storage[this._head]
      this._head++
      this._length--
      return firstValue
    } catch(err) {
      throw new Error(err)
    }
  }

  /**
   * Check the value of the first item of the queue
   */
  peek() {
    try {
      return this._storage[this._head]
    } catch(err) {
      throw new Error(err)
    }
  }

  /**
   * Check if the queue is empty
   * If it is empty revert the queue to initialization state
   */
  isEmpty() {
    try {
      const diff = this._head - this._length
      if(diff >= 0) {
        this._revertToOriginal()
      }
      return diff >= 0 ? true : false
    } catch(err) {
      throw new Error(err)
    }
  }

  /**
   * Reverts the queue to it's initialization state
   */
  _revertToOriginal() {
    this._storage = {}
    this._length = 0
    this._head = 0
  }

}

module.exports = Queue
