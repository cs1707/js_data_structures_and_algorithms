/**
 * [HashCollisionLinearProbing description]
 * 参考算法导论，删除时将 delete ValuePaire.key
 */
function HashCollisionLinearProbing () {
  var table = []

  this.put = function (key, value) {
    var position = loseloseHashCode(key)

    for(var index = position; table[index] !== undefined; index++) {
      if(table[index].key === undefined) {
        break
      }
    }

    table[index] = new ValuePair(key, value)

  }

  this.get = function (key) {
    var position = loseloseHashCode(key)

    for(var index = position; table[index] !== undefined; index++) {
      if(table[index].key === key) {
        return table[index].value
      }
    }

    return undefined
  }

  this.remove = function (key) {
    var position = loseloseHashCode(key)

    for(var index = position; table[position] !== undefined; index++) {
      if(table[position].key === key) {
        delete table[position].key
        return true
      }
    }

    return false
  }

  function loseloseHashCode (key) {
    var keyS = '' + key
    var hash = 0
    for (var i = 0; i < keyS.length; i++) {
      hash += keyS.charCodeAt(i)
    }

    return hash % 37
  }

  function ValuePair(key, value) {
    this.key = key
    this.value = value

    this.toString = function() {
      return '[' + this.key + ' - ' + this.value + ']'
    }
  }
}

module.exports = HashCollisionLinearProbing
