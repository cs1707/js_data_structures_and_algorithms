var Stack = require('./Stack')

function baseConverter(decNumber, base) {
  var remStack = new Stack()
  var rem
  var baseString = ''
  var digits = '0123456789ABCDEF'

  while(decNumber > 0) {
    rem = Math.floor(decNumber % base)
    remStack.push(rem)
    decNumber = Math.floor(decNumber / base)
  }

  while(!remStack.isEmpty()) {
    baseString += digits[remStack.pop()]
  }

  return baseString
}

module.exports = baseConverter
