function BinaryTreeTree() {

  var root = null

  this.getRoot = function() {
    return root
  }

  this.insert = function(key) {
    var newNode = new Node(key)
    if(root == null) {
      root = newNode
    } else {
      insertNode(root, newNode)
    }
  }

  this.search = function(key) {
    return searchNode(root, key)
  }

  // 中序遍历 left -> node -> right
  this.inOrderTraverse = function(callback) {
    inOrderTraverseNode(root, callback)
  }

  // 先序遍历 node -> left -> right
  this.preOrderTraverse = function(callback) {
    preOrderTraverseNode(root, callback)
  }

  // 后序遍历 left -> right -> node
  this.postOrderTraverse = function(callback) {
    postOrderTraverseNode(root, callback)
  }

  this.min = function() {
    var node = root
    while(node !== null && node.left) {
      node = node.left
    }

    if(node) {
      return node.key
    }

    return null
  }

  this.max = function() {
    var node = root
    while(node !== null && node.right) {
      node = node.right
    }

    if(node) {
      return node.key
    }

    return null
  }

  this.remove = function(key) {
    root = removeNode(root, key)
  }

}

function Node(key) {
  this.key = key
  this.left = null
  this.right = null
}

function insertNode(node, newNode) {
  if(newNode.key < node.key) {
    if(node.left == null) {
      node.left = newNode
    } else {
      insertNode(node.left, newNode)
    }
  } else {
    if(node.right == null) {
      node.right = newNode
    } else {
      insertNode(node.right, newNode)
    }
  }
}

function inOrderTraverseNode(node, callback) {
  if(node !== null) {
    inOrderTraverseNode(node.left, callback)
    callback(node.key)
    inOrderTraverseNode(node.right, callback)
  }
}

function preOrderTraverseNode(node, callback) {
  if(node !== null) {
    callback(node.key)
    preOrderTraverseNode(node.left, callback)
    preOrderTraverseNode(node.right, callback)
  }
}

function postOrderTraverseNode(node, callback) {
  if(node !== null) {
    postOrderTraverseNode(node.left, callback)
    postOrderTraverseNode(node.right, callback)
    callback(node.key)
  }
}

function searchNode(node, key) {
  if(node == null) {
    return false
  }

  if(key < node.key) {
    return searchNode(node.left, key)
  } else if(key > node.key) {
    return searchNode(node.right, key)
  } else {
    return true
  }
}

function findMinNode(node) {
  while(node && node.left !== null) {
    node = node.left
  }
  return node
}

function removeNode(node, key) {
  if(node == null) {
    return null
  }

  if(key < node.key) {
    node.left = removeNode(node.left, key)
    return node
  }
  if(key > node.key) {
    node.right = removeNode(node.right, key)
    return node
  }

  if(node.left == null && node.right == null) {
    node = null
    return node
  }

  if(node.left == null) {
    node = node.right
    return node
  }

  if(node.right == null) {
    node = node.left
    return node
  }

  var aux = findMinNode(node.right)
  node.key = aux.key
  node.right = removeNode(node.right, aux.key)
  return node
}


module.exports = BinaryTreeTree
