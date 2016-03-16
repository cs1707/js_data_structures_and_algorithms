var Set = require('../set/Set')
var expect = require('chai').expect

describe('Set测试', function() {

  var set = new Set()
  it('Set add 测试', function() {
    expect(set.add(1)).to.be.true
    expect(set.add(2)).to.be.true
    expect(set.add(1)).to.be.false
  })

  it('Set size测试', function(){
    expect(set.size()).to.be.equal(2)
  })

  it('Set values测试', function() {
    expect(set.values().sort()).to.deep.equal([1, 2])
  })

  it('Set remove测试', function() {
    expect(set.remove(2)).to.be.true
  })

  var set2 = new Set()
  it('Set union测试', function() {
    set.add(2)
    set.add(3)
    set.add(4)
    set2.add(1)
    set2.add(3)
    set2.add(7)
    expect(set.union(set2).values().sort()).to.deep.equal([1, 2, 3, 4, 7])
  })

  it('Set intersection测试', function() {
    expect(set.intersection(set2).values().sort()).to.deep.equal([1, 3])
  })

  it('Set difference测试', function() {
    expect(set.difference(set2).values().sort()).to.be.deep.equal([2, 4])
  })

  it('Set subset测试', function() {
    expect(set.subset(set2)).to.be.false
    var set3 = new Set()
    set.add(2)
    expect(set3.subset(set)).to.be.true
  })
})
