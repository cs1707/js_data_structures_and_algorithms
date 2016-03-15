var LinkedList = require('../linkedList/LinkedList')

function HashTableSeparateChaining () {
  var table = []

  this.put = function (key, value) {
    var position = loseloseHashCode(key)

    if(table[position] === undefined) {
      table[position] = new LinkedList()
    }

    table[position].append(new ValuePair(key, value))
  }

  this.get = function (key) {
    var position = loseloseHashCode(key)

    if(table[position] === undefined) {
      return undefined
    }

    var current = table[position].getHead()

    while(current.next) {
      if(current.element.key === key) {
        return current.element.value
      }
      current = current.next
    }

    if(current.element.key === key) {
      return current.element.value
    }

    return undefined
  }

  this.remove = function (key) {
    var position = loseloseHashCode(key)
    if(table[position] !== undefined) {

      var current = table[position].getHead()
      while(current.next) {
        if(current.element.key === key) {
          table[position].remove(current.element)
          if(table[position].isEmpty()) {
            delete table[position]
          }
          return true
        }

        current = current.next
      }

      if(current.element.key === key) {
        table[position].remove(current.element)
        if(table[position].isEmpty()) {
          delete table[position]
        }
        return true
      }
    }

    return false
  }

  function loseloseHashCode (key) {
    var keyS = '' + key
    var hash = 0
    for (var i = 0; i < keyS.length; i++) {
      hash += keyS.charCodeAt(i)
    }

    return hash % 37
  }

  function ValuePair(key, value) {
    this.key = key
    this.value = value

    this.toString = function() {
      return '[' + this.key + ' - ' + this.value + ']'
    }
  }
}

module.exports = HashTableSeparateChaining
