/*
Given an array nums of n integers and an integer target,
are there elements a, b, c, and d in nums such that a + b + c + d = target?
Find all unique quadruplets in the array which gives the sum of target.

Notice that the solution set must not contain duplicate quadruplets.

 

Example 1:

Input: nums = [1,0,-1,0,-2,2], target = 0
Output: [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]
Example 2:

Input: nums = [], target = 0
Output: []
 

Constraints:

0 <= nums.length <= 200
-109 <= nums[i] <= 109
-109 <= target <= 109
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum1 = function(nums, target) {
	let output = [];
    if(nums.length <= 3) return output;

    nums.sort(function(a, b){
    	return a - b;
    });

	let temp = [];
	let sum = 0;
	let i = Math.floor((nums.length - 1) / 2);
	let j = i + 1;
	let low = 0;
	let high = nums.length - 1;
	let lowTurn = true;
	let iTurn = true;

	function skipSameNumber(index, diff){
		while(true){
			if(nums[index + diff] === nums[index]){
				index = index + diff;
			} else {
				return index + diff;
			}
		}
	}

	while(i > 0 && j < nums.length - 1){
		sum = nums[low] + nums[i] + nums[j] + nums[high];

		if(sum === target){
			temp.push(nums[low], nums[i], nums[j], nums[high]);
			output.push(temp);
			temp = [];
			if(lowTurn){
				low = skipSameNumber(low, 1);
				lowTurn = false;
			} else {
				high = skipSameNumber(high, -1);
				lowTurn = true;
			}
		} else if(sum < target){
			low = skipSameNumber(low, 1);
		} else {
			high = skipSameNumber(high, -1);
		}

		if(i <= low || high <= j){
			if(iTurn){
				i = skipSameNumber(i, -1);
				iTurn = false;
			} else {
				j = skipSameNumber(j, 1);
				iTurn = true;
			}
			high = nums.length - 1;
			low = 0;
		}
	}
	return output;
};

var fourSum = function (nums, target) {
	if (nums.length < 4) {
		return [];
	}

	nums.sort((a, b) => a - b);

	const res = [];

	for (let i = 0; i < nums.length - 3; i++) {
		if (i > 0 && nums[i] === nums[i - 1]) {
			continue;
		}
		 if (nums[i] + nums[i + 1] + nums[i + 2] + nums[i + 3] > target) {
		     break;
		 }

		 for (let j = i + 1; j < nums.length - 2; j++) {
		     if (j > i + 1 && nums[j] === nums[j - 1]) {
		         continue;   
		     }
		     
		     let left = j + 1,
		         right = nums.length - 1;
		     while (left < right) {
		         const sum = nums[i] + nums[j] + nums[left] + nums[right];
		         if (sum === target) {
		             res.push([nums[i], nums[j], nums[left], nums[right]]);
		         }
		         if (sum <= target) {
		             while (nums[left] === nums[++left]);   
		         } else {
		             while (nums[right] === nums[--right]);  
		         }
		     }
		}
	}
	return res;
};
console.log(fourSum([1,2,3,4],3));
console.log(fourSum([1,2,3],0));
console.log(fourSum([1,2,3,4,-1,0,-5,-1,1],2));
console.log(fourSum([1,2,3,4,77,12,4,-1,-1,3,-5,-7,-5],1));
console.log(fourSum([1,2,3,4,11,-7,-8,-9,-6,-5,-4,-21],-1));
console.log(fourSum([1,2,3,4,-74,-5,-1,-4,-5,-63],-5));
console.log(fourSum([1,2,3,4,-1,-2,-3,-4,-7,44],4));
console.log(fourSum([1,0,-1,0,-2,2],0));

