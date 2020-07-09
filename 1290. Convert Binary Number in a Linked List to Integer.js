iven head which is a reference node to a singly-linked list. The value of each node in the linked list is either 0 or 1. The linked list holds the binary representation of a number.

Return the decimal value of the number in the linked list.

 

Example 1:


Input: head = [1,0,1]
Output: 5
Explanation: (101) in base 2 = (5) in base 10
-------------------------------------------------------------------------------------------------Solution

we use Logic where the result is move from last number to the first its a result *2 + arry[n] (from right to left through a loop)


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var getDecimalValue = function(head) {
    
    let value = 0;
    
    while(head){
        
        value = value*2 + head.val;
        
        head= head.next
    }
    
    return value;
    
   
};
-----------------------------------------Solution 2 

let binarystr = '';
    
    while(head){
        
        binarystr += head.val;
        head= head.next
    }
   
    return parseInt(binarystr,2);
