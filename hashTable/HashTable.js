function HashTable () {
  var table = []

  this.put = function (key, value) {
    var position = loseloseHashCode(key)
    table[position] = value
  }

  this.get = function (key) {
    var position = loseloseHashCode(key)
    return table[position]
  }

  this.remove = function (key) {
    var position = loseloseHashCode(key)
    delete table[position]
  }

  function loseloseHashCode (key) {
    var keyS = '' + key
    var hash = 0
    for (var i = 0; i < keyS.length; i++) {
      hash += keyS.charCodeAt(i)
    }

    return hash % 37
  }
}

module.exports = HashTable
