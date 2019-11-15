
class Stack {

  /**
   * Intitializes the new stack as and empty object with the length of 0
   * IMPORTANT: Do not manually change the initialization values
   */
  constructor() {
    this._storage = {}
    this._length = 0
  }

  /**
   * Insert an new item in the stack
   * @param {*} value 
   */
  push(value) {
    try {
      const index = this._length
      this._storage[index] = value
      this._length++
    } catch(err) {
      throw new Error(err)
    }
  }

  /**
   * Remove the last item from the stack
   */
  pop() {
    try {
      if (this.isEmpty()) return null

      const lastIndex = this._length - 1
      const lastValue = this._storage[lastIndex]
      this._length--
      return lastValue
    } catch(err) {
      throw new Error(err)
    }
  }

  /**
   * Check the value of the last item in the stack
   */
  peek() {
    try {
      const lastIndex = this._length - 1
      const lastValue = this._storage[lastIndex]
      return lastValue
    } catch(err) {
      throw new Error(err)
    }
  }

  /**
   * Check if the stack is empty
   */
  isEmpty() {
    try {
      if(this._length === 0) {
        this._revertToOriginal()
      }
      return this._length === 0 ? true : false
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
  }
}

module.exports = Stack
