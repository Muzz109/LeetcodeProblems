Given an array of integers where 1 ≤ a[i] ≤ n (n = size of array), some elements appear twice and others appear once.

Find all the elements of [1, n] inclusive that do not appear in this array.

Could you do it without extra space and in O(n) runtime? You may assume the returned list does not count as extra space.

Example:

Input:
[4,3,2,7,8,2,3,1]

Output:
[5,6]
--------------------------------------------------------------------------------------------------------------------------------------------------------------
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    
     let arry = [];
   let set = new Set(nums);
      
      for(let i=1;i<nums.length+1 ;i++){

        if(!set.has(i)){
           arry.push(i)
        }
      }
      


    return arry;
    
};



