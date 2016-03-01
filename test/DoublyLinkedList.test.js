var expect = require('chai').expect
var DoublyLinkedList = require('../linkedList/DoublyLinkedList')

describe('双向链表测试', function() {
  var doublyLinkedList = new DoublyLinkedList()

  it('双向链表append测试', function() {
    doublyLinkedList.append('John')
    expect(doublyLinkedList.toString()).to.be.equal('John')
    expect(doublyLinkedList.size()).to.be.equal(1)

    doublyLinkedList.append('Li')
    expect(doublyLinkedList.toString()).to.be.equal('John, Li')
    expect(doublyLinkedList.size()).to.be.equal(2)

    doublyLinkedList.append('Lucy')
    expect(doublyLinkedList.toString()).to.be.equal('John, Li, Lucy')
    expect(doublyLinkedList.size()).to.be.equal(3)

    doublyLinkedList.append('Hello')
    expect(doublyLinkedList.toString()).to.be.equal('John, Li, Lucy, Hello')
    expect(doublyLinkedList.inverseToString()).to.be.equal('Hello, Lucy, Li, John')
    expect(doublyLinkedList.size()).to.be.equal(4)
  })
})
