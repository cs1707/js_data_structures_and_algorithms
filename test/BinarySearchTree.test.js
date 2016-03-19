var BinarySearchTree = require('../tree/BinarySearchTree')
var expect = require('chai').expect

describe('BinarySearchTree 测试', function() {
  var tree = new BinarySearchTree()
  var arr = []
  var callback = function(key) {
    arr.push(key)
  }

  before(function(){
    tree.insert(11)
    tree.insert(7)
    tree.insert(15)
    tree.insert(5)
    tree.insert(3)
    tree.insert(9)
    tree.insert(8)
    tree.insert(10)
    tree.insert(13)
    tree.insert(12)
    tree.insert(14)
    tree.insert(20)
    tree.insert(18)
    tree.insert(25)
    tree.insert(6)
  })

  it('BinarySearchTree insert测试', function() {

    arr = []
    tree.inOrderTraverse(callback)
    expect(arr).to.be.deep.equal([3, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 18, 20, 25])

    arr = []
    tree.preOrderTraverse(callback)
    expect(arr).to.be.deep.equal([11, 7, 5, 3, 6, 9, 8, 10, 15, 13, 12, 14, 20, 18, 25])

    arr = []
    tree.postOrderTraverse(callback)
    expect(arr).to.be.deep.equal([3, 6, 5, 8, 10, 9, 7, 12, 14, 13, 18, 25, 20, 15, 11])
  })

  it('BinarySearchTree max测试', function() {
    expect(tree.max()).to.be.equal(25)
  })

  it('BinarySearchTree min测试', function() {
    expect(tree.min()).to.be.equal(3)
  })

  it('BinarySearchTree search测试', function() {
    expect(tree.search(0)).to.be.false
    expect(tree.search(3)).to.be.true
    expect(tree.search(18)).to.be.true
  })

  it('BinarySearchTree remove测试', function() {
    tree.remove(6)

    arr = []
    tree.inOrderTraverse(callback)
    expect(arr).to.deep.equal([3, 5, 7, 8, 9, 10, 11, 12, 13, 14, 15, 18, 20, 25])

    arr = []
    tree.preOrderTraverse(callback)
    expect(arr).to.be.deep.equal([11, 7, 5, 3, 9, 8, 10, 15, 13, 12, 14, 20, 18, 25])

    arr = []
    tree.postOrderTraverse(callback)
    expect(arr).to.be.deep.equal([3, 5, 8, 10, 9, 7, 12, 14, 13, 18, 25, 20, 15, 11])

    tree.remove(5)
    arr = []
    tree.inOrderTraverse(callback)
    expect(arr).to.deep.equal([3, 7, 8, 9, 10, 11, 12, 13, 14, 15, 18, 20, 25])

    tree.remove(15)
    arr = []
    tree.inOrderTraverse(callback)
    expect(arr).to.deep.equal([3, 7, 8, 9, 10, 11, 12, 13, 14, 18, 20, 25])

    arr = []
    tree.preOrderTraverse(callback)
    expect(arr).to.deep.equal([11, 7, 3, 9, 8, 10, 18, 13, 12, 14, 20, 25])

    arr = []
    tree.postOrderTraverse(callback)
    expect(arr).to.deep.equal([3, 8, 10, 9, 7, 12, 14, 13, 25, 20, 18, 11])

  })
})
