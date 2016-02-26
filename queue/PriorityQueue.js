// priority 越小， 优先级越高
function PriorityQueue() {
  var items = []

  function QueueElement(element, priority) {
    this.element = element
    this.priority = priority
  }

  this.enqueue = function(element, priority) {
    var queueElement = new QueueElement(element, priority)

    if(!items.length) {
      items.push(queueElement)
      return
    }

    for(var i = 0; i < items.length; i++) {
      if(queueElement.priority < items[i].priority) {
        items.splice(i, 0, queueElement)
        return
      }
    }

    items.push(queueElement)
  }

  this.dequeue = function() {
    return items.shift()
  }

  this.front = function() {
    return items[0]
  }

  this.isEmpty = function() {
    return items.length === 0
  }

  this.clear = function() {
    items = []
  }

  this.size = function() {
    return items.length
  }

  this.print = function() {
    console.log(items)
  }

}

module.exports = PriorityQueue
