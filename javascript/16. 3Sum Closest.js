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
    nums.sort((a, b) => a - b);
    const result = 0;
    let i, low, high, sum;
    for(i = 0; i < nums.length; i++) {
        low = i+1, high = nums.length-1, sum = 0;
        
        while(low < high) {
            sum = nums[i] + nums[low] + nums[high];
            
            if(sum === 0) {
                result.push([nums[i], nums[low], nums[high]]);
                while(nums[low+1] === nums[low]) low++;
                while(nums[high-1] === nums[high]) high--;
                low++;
                high--;
            } else if(sum < 0) low++;
            else high--;
        }
        while(nums[i+1] === nums[i]) i++;
    }
    return result;    
};