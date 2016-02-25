var Stack = require('./Stack')

function match(open, close) {
  var map = {
    '{': '}',
    '[': ']',
    '(': ')'
  }

  return map[open] === close && !!open
}

function parenthesesChecker(symbols) {
  var stack = new Stack()
  var index
  var symbol
  var top

  if(!symbols) {
    return false
  }

  for(index = 0; index < symbols.length; index++) {
    symbol = symbols.charAt(index)

    if(symbol === '{' || symbol === '[' || symbol === '(') {
      stack.push(symbol)
    } else {
      if(stack.isEmpty()) {
        return false
      }
      top = stack.pop()
      if(!match(top, symbol)) {
        return false
      }
    }
  }

  if(!stack.isEmpty()) {
    return false
  }

  return true
}

module.exports = parenthesesChecker
