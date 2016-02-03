var Stack = require('./Stack');

function match(open, close) {
  var map = {
    '{': '}',
    '[': ']',
    '(': ')'
  };

  return map[open] === close;
}

function parenthesesChecker(symbols) {
  if(!symbols) {
    return false;
  }

  var stack = new Stack();
  var index;
  var symbol;
  var top;

  for(index = 0; index < symbols.length; index++) {
    symbol = symbols.charAt(index);

    if(symbol === '{' || symbol === '[' || symbol === '(') {
      stack.push(symbol);
    } else if(stack.isEmpty()) {
      return false;
    } else {
      top = stack.pop();
      if(!match(top, symbol)) {
        return false;
      }
    }

  }

  return true;
}

module.exports = parenthesesChecker;

console.log(parenthesesChecker('{{([][])}()}'));
console.log(parenthesesChecker('[{()]'));
