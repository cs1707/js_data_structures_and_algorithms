function LinkedList() {
  var head = null
  var length = 0

  function Node(element) {
    this.element = element
    this.next = null
  }

  this.append = function(element) {
    var node = new Node(element)
    var current

    if(head === null) {
      head = node
    } else {
      current = head
      while(current.next) {
        current = current.next
      }
      current.next = node
    }

    length++
  }

  this.insert = function(position, element) {
    var current = head
    var previous
    var i
    var node

    if(position > length + 1 || position < 0) {
      return false
    }

    node = new Node(element)
    if(position === 0) {
      node.next = current
      head = node
    } else {
      for(i = 0; i < position; i++) {
        previous = current
        current = current.next
      }
      previous.next = node
      node.next = current
    }

    length++

    return true
  }

  this.removeAt = function(position) {
    var current = head
    var previous
    var i

    if(position < 0 || position >= length) {
      return null
    }

    if(position === 0) {
      head = current.next
    } else {
      for(i = 0; i < position; i++) {
        previous = current
        current = current.next
      }
      previous.next = current.next
    }

    length--

    return current.element
  }

  this.remove = function(element) {
    var current = head
    var previous

    while(current) {

      if(current.element === element) {
        if(!previous) {
          head = current.next
        } else {
          previous.next = current.next
        }
        length--
        return current.element
      }

      previous = current
      current = current.next
    }

    return null
  }

  this.indexOf = function(element) {
    var current = head
    var i = 0
    while(current) {
      if(current.element === element) {
        return i
      }
      i++
      current = current.next
    }

    return -1
  }

  this.isEmpty = function() {
    return length === 0
  }

  this.size = function() {
    return length
  }

  this.toString = function() {
    var current = head
    var arr = []

    while(current) {
      arr.push(current.element)
      current = current.next
    }

    return arr.join(',')
  }

  this.print = function() {
    console.log(this.toString())
  }

  this.getHead = function() {
    return head
  }
}

module.exports = LinkedList
