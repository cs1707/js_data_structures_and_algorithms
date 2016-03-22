function insertSort (nums) {
  for (var i = 1; i < nums.length; i++) {
    var current = nums[i]
    var j = i
    while (j > 0 && nums[j - 1] > current) {
      nums[j] = nums[j - 1]
      j--
    }
    nums[j] = current
  }

  return nums
}

module.exports = insertSort
