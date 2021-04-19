/*
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']',
determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
 

Example 1:

Input: s = "()"
Output: true
Example 2:

Input: s = "()[]{}"
Output: true
Example 3:

Input: s = "(]"
Output: false
Example 4:

Input: s = "([)]"
Output: false
Example 5:

Input: s = "{[]}"
Output: true
 

Constraints:

1 <= s.length <= 104
s consists of parentheses only '()[]{}'.
*/

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
	let length = s.length;
	if(length % 2 === 1) return false;
	let char = {
		'(' : 1,
		')' : 2,
		'[' : 3,
		']' : 4,
		'{' : 5,
		'}' : 6,
	};
	let memory = [];
	for(let i = 0; i < length; i++){
		if(char[s[i]] % 2 === 1){
			memory.push(char[s[i]]);
		} else {
			if(memory.pop() + 1 !== char[s[i]]) return false;
		}
	}
	if(memory.length !== 0) return false;
	return true;
};

console.log(isValid("()"))
console.log(isValid("()[]{}"))
console.log(isValid("(]"))
console.log(isValid("([)]"))
console.log(isValid("{[]}"))
console.log(isValid("{[((([[[{{{[[[{{}}]]]}}}]]])))]}{{[[()]]}}"))
console.log(isValid("[[[]"))