var expect = require('chai').expect
var selectionSort = require('../sort/selectionSort')

describe('selectionSort 测试', function (){

  it('输入[3, 8, 3, 4, 2, 9, 3, 8, 5, 7, 1] 应当输出 [1, 2, 3, 3, 3, 4, 5, 7, 8, 8, 9]', function (){
    expect(selectionSort([3, 8, 3, 4, 2, 9, 3, 8, 5, 7, 1])).to.be.deep.equal([1, 2, 3, 3, 3, 4, 5, 7, 8, 8, 9])
  })

  it('输入[6, 5, 4, 2, 1, 3, 8] 应当输出 [1, 2, 3, 4, 5, 6, 8]', function (){
    expect(selectionSort([6, 5, 4, 2, 1, 3, 8])).to.be.deep.equal([1, 2, 3, 4, 5, 6, 8])
  })
})
