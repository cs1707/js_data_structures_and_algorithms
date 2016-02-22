var Stack = require('../stack/Stack')
var expect = require('chai').expect

describe('栈测试', function(t){

  var stack = new Stack();

  it('栈push测试', function() {
    stack.push(1)
    expect(stack.peek()).to.be.equal(1)
    stack.push(2);
    expect(stack.peek()).to.be.equal(2)
  })

  it('栈pop测试', function() {
    expect(stack.pop()).to.be.equal(2)
    expect(stack.peek()).to.be.equal(1)
  })

  it('栈size、isEmpty测试', function() {
    expect(stack.isEmpty()).to.be.equal(false)
    expect(stack.size()).to.be.equal(1)
  })

  it('栈clear测试', function() {
    stack.clear()
    expect(stack.isEmpty()).to.be.equal(true)
    expect(stack.size()).to.be.equal(0)
  })

})
