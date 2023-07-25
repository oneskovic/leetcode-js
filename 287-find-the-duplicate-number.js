/**
 * @param {number[]} nums
 * @return {number}
 */
const findDuplicate = function(nums) {
    const n = nums.length;
    let ans = 0;
    let bit_max = 31;
    while (((n - 1) >> bit_max) == 0) {
      bit_max -= 1;
    }
    for (let bit = 0; bit <= bit_max; ++bit) {
      let x = 0, y = 0;
      for (let i = 0; i < n; ++i) {
        if ((nums[i] & (1 << bit)) != 0) {
          x += 1;
        }
        if (i >= 1 && ((i & (1 << bit)) != 0)) {
          y += 1;
        }
      }
      if (x > y) {
        ans |= 1 << bit;
      }
    }
    return ans;
};

