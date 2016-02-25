var Queue = require('../queue/Queue')
var expect = require('chai').expect

describe('队列测试', function() {
  var queue = new Queue()

  it('队列equeue测试', function() {
    expect(queue.isEmpty()).to.be.equal(true)
    queue.enqueue('John')
    expect(queue.isEmpty()).to.be.equal(false)

    expect(queue.front()).to.be.equal('John')
    expect(queue.size()).to.be.equal(1)

    queue.enqueue('Jack')
    expect(queue.size()).to.be.equal(2)

    queue.enqueue('Li')
    expect(queue.size()).to.be.equal(3)
    expect(queue.front()).to.be.equal('John')
  })

  it('队列dequeue测试', function() {
    expect(queue.size()).to.be.equal(3)
    expect(queue.dequeue()).to.be.equal('John')

    expect(queue.size()).to.be.equal(2)
    expect(queue.dequeue()).to.be.equal('Jack')

    expect(queue.size()).to.be.equal(1)
    expect(queue.dequeue()).to.be.equal('Li')
    expect(queue.isEmpty()).to.be.equal(true)
  })
})
