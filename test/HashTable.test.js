var expect = require('chai').expect
var HashTable = require('../hashTable/HashTable.js')

describe('hash table 测试', function() {
  var hashTable = new HashTable()

  before(function(){
    hashTable.put('Gandalf', 'gandalf@email.com')
    hashTable.put('John', 'johnsnow@email.com')
    hashTable.put('Tyrion', 'tyrion@email.com')
  })

  it('hash table get测试', function() {
    expect(hashTable.get('Gandalf')).to.be.equal('gandalf@email.com')
    expect(hashTable.get('John')).to.be.equal('johnsnow@email.com')
    expect(hashTable.get('Tyrion')).to.be.equal('tyrion@email.com')
  })

  it('hash table remove测试', function() {
    hashTable.remove('Gandalf')
    expect(hashTable.get('Gandalf')).to.be.deep.equal(undefined)
  })

})
