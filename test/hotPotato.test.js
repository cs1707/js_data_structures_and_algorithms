var expect = require('chai').expect
var hotPotato = require('../queue/hotPotato')

describe('击鼓传花函数测试', function() {
  it('输入["John", "Jack", "Camila", "Ingrid", "Carl"], 7 应该返回John', function() {
    expect(hotPotato(["John", "Jack", "Camila", "Ingrid", "Carl"], 7)).to.be.equal('John')
  })
})
