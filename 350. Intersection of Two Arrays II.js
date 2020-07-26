Given two arrays, write a function to compute their intersection.

Example 1:

Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2,2]
Example 2:

Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [4,9]
-------------------------------------------------------------------------------------------------------------------------
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    
   let hashmap = {};
    let arry = [];
    
    for(let i=0;i<nums1.length;i++){
        
        if(!hashmap[nums1[i]]){
            
            hashmap[nums1[i]]= 1
        }else{
            hashmap[nums1[i]]++
        }
    }

    console.log(hashmap)
    
    for(let j=0;j< nums2.length;j++){
        
        if(hashmap[nums2[j]] > 0){
            
            arry.push(nums2[j])
            hashmap[nums2[j]]--
        }
    }
    
    return arry
};



