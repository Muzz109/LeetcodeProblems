Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

Note: For the purpose of this problem, we define empty string as valid palindrome.

Example 1:

Input: "A man, a plan, a canal: Panama"
Output: true
Example 2:

Input: "race a car"
Output: false
-----------------------------------------------------------------------Solution

 */
var isPalindrome = function(s) {
   if(s.length===0) return true
	let cleanString = s.replace(/[^0-9A-Z]+/gi,"").toLowerCase();
	let length = cleanString.length-1
	let mid = Math.floor(length/2)
	for(let i = 0; i <= mid; i++){
		if(cleanString[i]!=cleanString[length-i]){
			return false
		}
	}
	return true
};
