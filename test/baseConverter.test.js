var expect = require('chai').expect
var baseConverter = require('../stack/baseConverter')

describe('十进制转换任意进制（2-16进制）函数测试', function() {

  it('100345的2进制数为11000011111111001', function() {
    expect(baseConverter(100345, 2)).to.be.equal('11000011111111001')
  })

  it('100345的8进制数为303771', function() {
    expect(baseConverter(100345, 8)).to.be.equal('303771')
  })

  it('100345的16进制数为187F9', function() {
    expect(baseConverter(100345, 16)).to.be.equal('187F9')
  })

})
