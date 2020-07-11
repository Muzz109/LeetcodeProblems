Given a singly linked list, determine if it is a palindrome.

Example 1:

Input: 1->2
Output: false
Example 2:

Input: 1->2->2->1
Output: true
Follow up:
Could you do it in O(n) time and O(1) space?

-------------------------------------------------Solution 1

Method1 - store in array and reverse it

Method 2- Find the mid and then the reverse of it and compare each element from the mid till the mid ends 


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    
     function reverse (head) {
        let newHead = null
        while (head) {
            var temp = head.next;
            head.next = newHead;
            newHead = head;
            head = temp; 
        }
        return newHead;
    }
    
    //mid
    function findMid (head) {
        if(!head) return head;
        var slow = head;
        var fast = head;
        while(fast.next && fast.next.next) {
            slow = slow.next;
            fast = fast.next.next
        }
        return slow;
    }
    var rev = reverse(findMid(head));
    
    console.log("The value of rev",rev)
        console.log("The value of head",head)
    while(head && rev) {
       if(head.val !== rev.val) return false;
       head = head.next;
       rev = rev.next;
   }
    
    return true
};
