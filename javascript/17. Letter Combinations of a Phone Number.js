/*
Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.

A mapping of digit to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.



 

Example 1:

Input: digits = "23"
Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]
Example 2:

Input: digits = ""
Output: []
Example 3:

Input: digits = "2"
Output: ["a","b","c"]
 

Constraints:

0 <= digits.length <= 4
digits[i] is a digit in the range ['2', '9'].
*/

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
	if(!digits) return [];
    const letters = {
    	'2' : ['a','b','c'],
    	'3' : ['d','e','f'],
    	'4' : ['g','h','i'],
    	'5' : ['j','k','l'],
    	'6' : ['m','n','o'],
    	'7' : ['p','q','r','s'],
    	'8' : ['t','u','v'],
    	'9' : ['w','x','y','z']
    };
    if(digits.length === 1) return letters[digits];
	let temp = digits.split('');
	let result = [];
	let currentLetter = letters[temp[0]];
	let nextLetter = [];
    let i;
    let j = 0;
    let k = 0;
    for (i = 1; i < temp.length; i++) {
    	nextLetter = letters[temp[i]];
    	while(j < nextLetter.length){
    		result.push(currentLetter[k] + nextLetter[j]);
    		if(k < currentLetter.length - 1){
    			k++;
    		} else {
    			k = 0;
    			j++;
    		}
    	}
    	k = 0;
    	j = 0;
    	currentLetter = result;
    	result = [];
    }
    return currentLetter;
};

console.log(letterCombinations("2345"));