/**
 * @param {number[]} nums
 * @return {number[]}
 */

const findDuplicates = function(nums) {
  if (nums === null || nums.length <= 1) {
    return [];
  }

  let dup = [];
  for (let i = 0, n = nums.length; i < n; i++) {
    let next = Math.abs(nums[i]);
    nums[next - 1] < 0 ? dup.push(next) : (nums[next - 1] = -nums[next - 1]);
  }

  return dup;
};

console.log(findDuplicates([4, 3, 2, 7, 8, 2, 3, 1]));
console.log(findDuplicates([10, 2, 5, 10, 9, 1, 1, 4, 3, 7]));

