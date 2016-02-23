var expect = require('chai').expect
var parenthesesChecker = require('../stack/parenthesesChecker')

describe('平衡括号测试', function() {

  it('{{([][])}()} 平衡', function() {
    expect(parenthesesChecker('{{([][])}()}')).to.be.equal(true)
  })

  it('[{()] 不平衡', function() {
    expect(parenthesesChecker('[{()]')).to.be.equal(false)
  })

})
