/*
Given a string s, return the longest palindromic substring in s.

 

Example 1:

Input: s = "babad"
Output: "bab"
Note: "aba" is also a valid answer.
Example 2:

Input: s = "cbbd"
Output: "bb"
Example 3:

Input: s = "a"
Output: "a"
Example 4:

Input: s = "ac"
Output: "a"
 

Constraints:

1 <= s.length <= 1000
s consist of only digits and English letters (lower-case and/or upper-case),

*/

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
	let list = s.split('');
	let result = s.substring(0,1);
	let temp;
	let cnt;
	for (let i = 0; i < s.length; i++) {
		temp = '';
		cnt = 1;

		if(list[i+1] && list[i] === list[i+1]){
			while(true){
				if(list[i-cnt] && list[i+1+cnt] && list[i-cnt] === list[i+1+cnt]){
					cnt++;
					continue;
				} else {
					temp = list.slice(i-(cnt-1), i+2+(cnt-1)).join('');
					if(temp.length > result.length){
						result = temp;
					}
					break;
				}
			}
		}

		cnt = 1;
		if(list[i-1] && list[i+1] && list[i-1] === list[i+1]){
			while(true){
				if(list[i-1-cnt] && list[i+1+cnt] && list[i-1-cnt] === list[i+1+cnt]){
					cnt++;
					continue;
				} else {
					temp = list.slice(i-1-(cnt-1), i+2+(cnt-1)).join('');
					if(temp.length > result.length){
						result = temp;
					}
					break;
				}
			}
		}
	}
	return result;
};

console.log(longestPalindrome("mamqooooor"));