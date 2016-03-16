function Set() {
  var items = []

  this.add = function (value) {
    if(items.indexOf(value) !== -1) {
      return false
    }
    items.push(value)
    return true
  }

  this.remove = function (value) {
    var index = items.indexOf(value)
    if(index !== -1) {
      items.splice(index, 1)
      return true
    }

    return false
  }

  this.has = function (value) {
    return items.indexOf(value) !== -1
  }

  this.clear = function () {
    items.length = 0
  }

  this.size = function () {
    return items.length
  }

  this.values = function () {
    return items.slice()
  }

  this.union = function (otherSet) {
    var unionSet = new Set()

    items.forEach(function (item){
      unionSet.add(item)
    })

    otherSet.values().forEach(function (item) {
      unionSet.add(item)
    })

    return unionSet
  }

  this.intersection = function (otherSet) {
    var intersection = new Set()

    items.forEach(function (item){
      if(otherSet.has(item)) {
        intersection.add(item)
      }
    })

    return intersection
  }

  this.difference = function (otherSet) {
    var differenceSet = new Set()

    items.forEach(function (item) {
      if(!otherSet.has(item)) {
        differenceSet.add(item)
      }
    })

    return differenceSet
  }

  this.subset = function (otherSet) {
    if(this.size() > otherSet.size()) {
      return false
    }
    for (var i = 0; i < items.length; i++) {
      if (!otherSet.has(items[i])) {
        return false
      }
    }

    return true
  }
}

module.exports = Set
