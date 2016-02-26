###本项目主要参考《学习JavaScript数据结构与算法》一书###

###1. 栈###

**栈**是一种『先入后出，后入先出』的数据结构。

####数组实现

```
function Stack() {
  var items = []

  this.push = function(element) {
    items.push(element)
  }

  this.pop = function() {
    return items.pop()
  }

  this.peek = function() {
    return items[items.length - 1]
  }

  this.isEmpty = function() {
    return items.length === 0
  }

  this.size = function() {
    return items.length
  }

  this.clear = function() {
    items.length = 0
    // or
    // items = []
  }

  this.print = function() {
    console.log(items)
  }
}
```
###2. 队列###
**队列**是一种『先入先出，后入后出』的数据结构。
####数组实现####
```
function Queue() {
  var items = []

  this.enqueue = function(element) {
    items.push(element)
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
```
**优先队列**的每个元素都有各自的优先级，优先级最高的元素最先得到服务；优先级相同的元素按照其在优先队列中的顺序得到服务。
####数组实现
```
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
```
