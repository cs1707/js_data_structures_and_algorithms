function mergeSort (nums) {
  if (nums.length === 1) {
    return nums
  }
  var mid = Math.floor(nums.length / 2)
  var left = nums.slice(0, mid)
  var right = nums.slice(mid, nums.length)

  return merge(mergeSort(left), mergeSort(right))
}

function merge (left, right) {
  var result = []
  var l = 0
  var r = 0
  while (l < left.length && r < right.length) {
    if (left[l] < right[r]) {
      result.push(left[l])
      l++
    } else {
      result.push(right[r])
      r++
    }
  }

  while (l < left.length) {
    result.push(left[l])
    l++
  }

  while (r < right.length) {
    result.push(right[r])
    r++
  }

  return result
}

module.exports = mergeSort
