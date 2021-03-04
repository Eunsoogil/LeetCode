/*
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

 

Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
 

Constraints:

0 <= strs.length <= 200
0 <= strs[i].length <= 200
strs[i] consists of only lower-case English letters.
*/

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
	if(!strs || !strs[0]) return '';
	if(strs.length === 1) return strs[0];
	let result = '';
    let template = strs[0].split('');
    for (let i = 0; i < template.length; i++) {
    	for (let j = 1; j < strs.length; j++) {
    		if(!strs[j].startsWith(template[i])) return result;
    		strs[j] = strs[j].substr(1);
    	}
    	result += template[i];
    }
    return result;
};

console.log(longestCommonPrefix(['dog', 'dog', 'dog', 'dog']))