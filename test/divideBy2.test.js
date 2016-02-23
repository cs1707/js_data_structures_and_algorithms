var expect = require('chai').expect
var divideBy2 = require('../stack/divideBy2')

describe('栈应用--十进制到二进制转换函数测试', function() {

  it('233的二进制数为11101001', function() {
    expect(divideBy2(233)).to.be.equal('11101001')
  })

  it('10的二进制数为1010', function() {
    expect(divideBy2(10)).to.be.equal('1010')
  })

  it('1000的二进制数为1111101000', function() {
    expect(divideBy2(1000)).to.be.equal('1111101000')
  })
})
