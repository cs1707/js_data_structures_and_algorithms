var expect = require('chai').expect
var PriorityQueue = require('../queue/PriorityQueue')

describe('优先队列测试', function() {
  var priorityQueue

  before(function(){
    priorityQueue = new PriorityQueue()
  })

  it('优先队列应该为空', function() {
    expect(priorityQueue.isEmpty()).to.be.true
  })

  it('优先队列 dequeue() 元素应该为{element: "Jack", priority: 1}', function() {
    priorityQueue.enqueue('John', 2)
    priorityQueue.enqueue('Jack', 1)
    priorityQueue.enqueue('Camlia', 1)

    expect(priorityQueue.dequeue()).to.be.deep.equal({
      element: 'Jack',
      priority: 1
    })

  })
  it('优先队列 dequeue() 元素应该为{element: "Camlia", priority: 1}', function() {
    expect(priorityQueue.dequeue()).to.be.deep.equal({
      element: 'Camlia',
      priority: 1
    })

  })

  it('优先队列 dequeue() 元素应该为{element: "John", priority: 2}', function() {
    expect(priorityQueue.dequeue()).to.be.deep.equal({
      element: 'John',
      priority: 2
    })
  })

})
