Given an array of integers nums.

A pair (i,j) is called good if nums[i] == nums[j] and i < j.

Return the number of good pairs.
----------------------------------------------------------Solution O(n2)

/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function(nums) {
    let count = 0
    
    for(let i =0;i< nums.length;i++){
        
       for( j=i+1 ;j< nums.length ;j++){
        
        if(nums[i] === nums[j]){
            
            count++
        }
       }
    }
    
    return count;
};
