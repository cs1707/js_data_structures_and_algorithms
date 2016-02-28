var Queue = require('./Queue')

/**
 * 击鼓传花
 * @param  {[array]} nameList [description]
 * @param  {[number]} num      [description]
 * @return {[string]}          [description]
 */
function hotPotato(nameList, num) {
  var queue = new Queue()
  var i
  var eliminated = ''

  for(i = 0; i < nameList.length; i++) {
    queue.enqueue(nameList[i])
  }

  while(queue.size() > 1) {
    for(i = 0; i < num; i++) {
      queue.enqueue(queue.dequeue())
    }
    eliminated = queue.dequeue()
    console.log(eliminated + ' 在击鼓传花游戏中被淘汰。')
  }

  return queue.dequeue()
}

module.exports = hotPotato
