/**
 * The hashing algorithm utilized by the hash table
 */
const hash = require('fnv1a')


class HashTable {

  /**
   * Implements a new hash table 
   * IMPORTANT: Do not modify hash table manually
   */
  constructor() {
    this._storage = []
  }

  /**
   * Inserts a new item in the hash table as a key value pair
   * @param {*} key 
   * @param {*} value 
   */
  insert(key, value) {
    try {
      const index = hash(key)
      if(!this._storage[index]) {
        this._storage[index] = []
      }
      this._storage[index].push([key, value])
    } catch(err) {
      throw new Error(err)
    }
  }

  /**
   * Returns the value of the key value pair stored with the given key
   * @param {*} key 
   */
  get(key) {
    try {
      const index = hash(key)
      let arrayAtIndex = this._storage[index]
      for(let i = 0 ; i < arrayAtIndex.length; i++) {
        let pair = arrayAtIndex[i]
        if(pair[0] === key) {
          return pair[1]
        }
      }
    } catch(err) {
      throw new Error(err)
    }
  }

  /**
   * Removes and returns the value of the key value pair
   * stored with the given key
   * @param {*} key 
   */
  remove(key) {
    try {
      const index = hash(key)
      let arrayAtIndex = this._storage[index]
      let value
      for(let i = 0; i < arrayAtIndex.length; i++) {
        let pair = arrayAtIndex[i]
        if(pair[0] === key) {
          value = pair[1]
          delete arrayAtIndex[i]
          break
        }
      }
      return value
    } catch(err) {
      throw new Error(err)
    }
  }

}


module.exports = HashTable
