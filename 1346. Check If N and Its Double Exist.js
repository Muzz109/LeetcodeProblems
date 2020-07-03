Given an array arr of integers, check if there exists two integers N and M such that N is the double of M ( i.e. N = 2 * M).

More formally check if there exists two indices i and j such that :

i != j
0 <= i, j < arr.length
arr[i] == 2 * arr[j]
 

Example 1:

Input: arr = [10,2,5,3]
Output: true
Explanation: N = 10 is the double of M = 5,that is, 10 = 2 * 5
----------------------------------------------------------------------------------------------------------------------------------------------------------

/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function(arr) {
    
    if(!arr.length || arr.length === 1) return false;
    for(let i = 0; i < arr.length; i++) {
        if(arr.includes(arr[i] * 2) && arr[i] !== 0) return true;
        if(arr[i] === 0 && arr.indexOf(0) !== i) return true;
    }
    return false;
};
