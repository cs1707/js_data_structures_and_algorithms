function DoublyLinkedList() {
  var length = 0
  var head = null
  var tail = null

  function Node(element) {
    this.element = element
    this.next = null
    this.prev = null
  }

  this.append = function(element) {
    var node = new Node(element)

    if(head === null) {
      head = node
      tail = node
    } else {
      tail.next = node
      node.prev = tail
      tail = node
    }

    length++
  }

  this.insert = function(position, element) {
    if(position < 0 || position > length) {
      return false
    }

    var node = new Node(element)
    var current = head
    var previous
    var i

    if(position === 0) { // first position

      if(head === null) {
        head = node
        tail = node
      } else {
        node.next = head
        head.prev = node
        head = node
      }

    } else if(length === position) { // last position

      tail.next = node
      node.prev = tail
      tail = node

    } else {

      for(i = 0; i < position; i++) {
        previous = current
        current = current.next
      }

      previous.next = node
      node.prev = previous
      node.next = current
      current.prev = node

    }

    length++

    return true

  }

  this.removeAt = function(position) {
    if(position < 0 || position >= length) {
      return null
    }

    var current = head
    var previous
    var i

    if(position === 0) {

      head = head.next

      if(length === 1) {
        tail = null
      } else {
        head.prev = null
      }

    } else if( position === length - 1) {

      current = tail
      tail = tail.prev
      tail.next = null

    } else {
      for(i = 0; i < position; i++) {
        previous = current
        current = current.next
      }
      previous.next = current.next
      current.next.prev = previous.prev
    }

    length--

    return current.element
  }

  this.remove = function(element) {
    var i = this.indexOf(element)
    return this.removeAt(i)
  }


  this.isEmpty = function() {
    return length === 0
  }

  this.size = function() {
    return length
  }

  this.indexOf = function(element) {
    var current = head
    var i = 0

    while(current) {
      if(current.element === element) {
        return i
      }

      current = current.next
    }

    return -1
  }

  this.toString = function() {
    var current
    var s = ''

    if(head) {
      s = head.element
      current = head.next
    }

    while(current) {
      s += ', ' + current.element
      current = current.next
    }

    return s
  }

  this.inverseToString = function() {
    var current
    var s = ''

    if(tail) {
      s = tail.element
      current = tail.prev
    }

    while(current) {
      s += ', ' + current.element
      current = current.prev
    }

    return s
  }

  this.print = function() {
    console.log(this.toString())
  }

  this.printInverse = function() {
    console.log(this.inverseToString())
  }

  this.getHead = function() {
    return head
  }

  this.getTail = function() {
    return tail
  }

}

module.exports = DoublyLinkedList
