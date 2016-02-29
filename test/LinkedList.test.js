var expect = require('chai').expect
var LinkedList = require('../linkedList/LinkedList')

describe('链表测试', function() {
  var linkedList;
  before(function() {
    linkedList = new LinkedList()
  })

  it('向链表尾部追加元素1,3,6,8 删除第2个元素, 被删除的元素应该为6', function() {
    linkedList.append(1)
    linkedList.append(3)
    linkedList.append(6)
    linkedList.append(8)
    expect(linkedList.removeAt(2)).to.be.equal(6)
  })

  it('链表长度应该为3', function() {
    expect(linkedList.size()).to.be.equal(3)
  })

  it('链表 indexOf(6) 应该返回 -1, indexOf(3) 应该返回1', function() {
    expect(linkedList.indexOf(6)).to.be.equal(-1)
    expect(linkedList.indexOf(3)).to.be.equal(1)
  })

  it('链表remove测试', function() {
    expect(linkedList.remove(1)).to.be.equal(1)
    expect(linkedList.remove(333)).to.be.equal(null)
  })

})
