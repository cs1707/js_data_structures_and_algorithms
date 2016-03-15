var expect = require('chai').expect
var HashCollisionLinearProbing = require('../hashTable/HashCollisionLinearProbing')

describe('HashCollisionLinearProbing 测试', function() {
  var hashTable = new HashCollisionLinearProbing()

  before(function(){
    hashTable.put('Donnie', 'donnie@email.com')
    hashTable.put('Jamie', 'jamie@email.com')
    hashTable.put('Sue', 'sue@email.com')
    hashTable.put('Tyrion', 'tyrion@email.com')
    hashTable.put('Aaron', 'aaron@email.com')
  })

  it('HashTableSeparateChaining get测试', function() {
    expect(hashTable.get('Donnie')).to.be.equal('donnie@email.com')
    expect(hashTable.get('Jamie')).to.be.equal('jamie@email.com')
    expect(hashTable.get('Sue')).to.be.equal('sue@email.com')
    expect(hashTable.get('Tyrion')).to.be.equal('tyrion@email.com')
    expect(hashTable.get('Aaron')).to.be.equal('aaron@email.com')
  })

  it('HashTableSeparateChaining remove测试', function() {
    hashTable.remove('Donnie')
    expect(hashTable.get('Donnie')).to.be.deep.equal(undefined)
    expect(hashTable.get('Jamie')).to.be.equal('jamie@email.com')
    expect(hashTable.get('Sue')).to.be.equal('sue@email.com')
  })
})
