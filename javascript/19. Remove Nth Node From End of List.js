/*
Given the head of a linked list, remove the nth node from the end of the list and return its head.

Follow up: Could you do this in one pass?

 

Example 1:


Input: head = [1,2,3,4,5], n = 2
Output: [1,2,3,5]
Example 2:

Input: head = [1], n = 1
Output: []
Example 3:

Input: head = [1,2], n = 1
Output: [1]
 

Constraints:

The number of nodes in the list is sz.
1 <= sz <= 30
0 <= Node.val <= 100
1 <= n <= sz
Accepted
836,252
Submissions
2,330,359
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd1 = function(head, n) {
	let node = head;
	let size = 1;
	while(node.next){
		node = node.next;
		size++;
	}
	let target = size - n;
	node = head;
	for(let i = 0; i < target; i++){
		node = node.next;
	}
	if(!node.next){
		return null;
	} else {
		node.next = node.next.next
	}
	return head;
};

var removeNthFromEnd = function(head, n) {
    let dummy = new ListNode(0, head)
    let removal = dummy
    
    let count = -n+1 // this is so that when it is positive, the removal would begin to move to skip values
    // I added +1 due to the positive and negative numbers are separated by 0
    // ex. [-2,-1,0,1,2,3,4,5]

    while (head != null) {
        // when count reaches the head, it can start to iterate
        if (count >= 1) {
            removal  = removal.next
        }
        count++
        head = head.next
    }
    // removal targets the node before the deleting node
    removal.next = removal.next.next
    return dummy.next
}