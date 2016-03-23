function selectionSort (nums) {
  for (var i = 0; i < nums.length; i++) {
    var min = i
    for (var j = i; j < nums.length; j++) {
      if(nums[j] < nums[min]) {
        min = j
      }
    }
    if(i !== min) {
      var temp = nums[i]
      nums[i] = nums[min]
      nums[min] = temp
    }
  }

  return nums
}

module.exports = selectionSort
