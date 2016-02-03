var test = require('tape');

var Stack = require('../Stack');

test('栈', function(t){

  var stack = new Stack();
  t.equal(true, stack.isEmpty());

  stack.push(2);
  t.equal(false, stack.isEmpty())
  t.equal(2, stack.peek());
  t.equal(1, stack.size());

  stack.push(3);
  t.equal(3, stack.peek());

  t.equal(3, stack.pop());
  t.equal(2, stack.peek());

  stack.clear();
  t.equal(true, stack.isEmpty());

  t.end();
});
