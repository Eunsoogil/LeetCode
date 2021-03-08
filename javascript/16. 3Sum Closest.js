/*
Given an array nums of n integers and an integer target, find three integers in nums such that the sum is closest to target. Return the sum of the three integers. You may assume that each input would have exactly one solution.

 

Example 1:

Input: nums = [-1,2,1,-4], target = 1
Output: 2
Explanation: The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).
 

Constraints:

3 <= nums.length <= 10^3
-10^3 <= nums[i] <= 10^3
-10^4 <= target <= 10^4
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    let len = nums.length;
        
    nums.sort((a, b) => a - b);
    
    let result = nums[0] + nums[1] + nums[2];

    for(let i = 0; i< len - 2 ; i++) {
        let j = i + 1;
        let k = len - 1;
        
        while (j < k) {
            let sum = nums[i] + nums[j] + nums[k];
            let dif = sum - target;
            if (Math.abs(sum - target) < Math.abs(result - target)){
                result = sum;
            }
            if (dif < 0) {
                j++;
            } else if (dif > 0) {
                k--;
            } else if (!dif) {
                return target;
            }   
        }
    }
    
    return result;
};

console.log(threeSumClosest([-1,2,1,-4, 3, 2, 1, 4], 2))