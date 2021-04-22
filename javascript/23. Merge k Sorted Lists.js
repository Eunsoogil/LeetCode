/*
You are given an array of k linked-lists lists,
each linked-list is sorted in ascending order.

Merge all the linked-lists into one sorted linked-list and return it.

 

Example 1:

Input: lists = [[1,4,5],[1,3,4],[2,6]]
Output: [1,1,2,3,4,4,5,6]
Explanation: The linked-lists are:
[
  1->4->5,
  1->3->4,
  2->6
]
merging them into one sorted list:
1->1->2->3->4->4->5->6
Example 2:

Input: lists = []
Output: []
Example 3:

Input: lists = [[]]
Output: []
 

Constraints:

k == lists.length
0 <= k <= 10^4
0 <= lists[i].length <= 500
-10^4 <= lists[i][j] <= 10^4
lists[i] is sorted in ascending order.
The sum of lists[i].length won't exceed 10^4.
*/
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
	function merge(l1, l2){
	    let list = new ListNode()
	    let head = list
	    
	    while (l1 !== null && l2 !== null) {
	        if (l1.val < l2.val) {
	            list.next = new ListNode(l1.val)
	            l1 = l1.next
	        } else {
	            list.next = new ListNode(l2.val)
	            l2 = l2.next
	        }
	        list = list.next
	    }
	    if (l1 !== null)
	        list.next = l1
	    if (l2 !== null)
	        list.next = l2
	    return head.next
	}

	let result = lists[0];
	for(let i = 1; i < lists.length; i++){
		result = merge(result, lists[i]);
	}
	return result || null;
};