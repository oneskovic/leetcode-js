/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const findTargetSumWays = function(nums, target) {
    const sum = nums.reduce((a, b) => a+b);
    if(Math.abs(target) > sum) {
        return 0;
    }
    if((target + sum) % 2) {
        return 0;
    }
    const newTarget = (target + sum) / 2;
    let dp = new Array(newTarget+1).fill(0);
    dp[0] = 1;
    for(let i = 0; i < nums.length; i++) {
        for(let j = newTarget; j >= nums[i]; j--) {
            dp[j] += dp[j - nums[i]];
        }
    }
    return dp[newTarget];
};



