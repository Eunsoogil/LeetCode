//You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.
//
//You may assume the two numbers do not contain any leading zero, except the number 0 itself.
//
//Example 1:
//Input: l1 = [2,4,3], l2 = [5,6,4]
//Output: [7,0,8]
//Explanation: 342 + 465 = 807.
//
//Example 2:
//
//Input: l1 = [0], l2 = [0]
//Output: [0]
//
//Example 3:
//
//Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
//Output: [8,9,9,9,0,0,0,1]
// 
//Constraints:
//
//The number of nodes in each linked list is in the range [1, 100].
//0 <= Node.val <= 9
//It is guaranteed that the list represents a number that does not have leading zeros.



/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */


//let Node_1 = new ListNode(1); Node_1.next = Node_2;
//let Node_2 = new ListNode(2); Node_2.next = Node_3;
//let Node_3 = new ListNode(3); Node_3.next = null;
//
//let Node_1 = new ListNode(1); 
//Node_1.next = new ListNode(2);
//Node_1.next.next = new ListNode(3);
//
//function ReadListNode(ListNode){
//    let num = ""; //출력 해당
//    let current = ListNode; //현재 처리중인 노드 (null 포함)
//    let reverse = (str) => { //문자열 역순 내부함수
//        let temp = [];
//        let len = str.length;
//        for(let i = 0; i <= len; i++)
//            temp.push(str.charAt(len-i));
//        return temp.join('');
//    };
//    while(current != null) {
//        num += current.val;
//        current = current.next;
//    }
//    return Number(reverse(num));
//}


var addTwoNumbers = function(l1, l2) {
    let Result = new ListNode(0);
    let current1 = l1;
    let current2 = l2;
    let currentR = Result;
    let carry = 0;
    while(current1 != null || current2 != null || carry > 0) {
        let temp1 = (current1 == null) ? 0 : current1.val;
        let temp2 = (current2 == null) ? 0 : current2.val;
        let dsum = temp1 + temp2 + carry;
        carry = Math.floor(dsum/10);
        currentR.next = new ListNode(dsum % 10);
        if(current1 != null) current1 = current1.next;
        if(current2 != null) current2 = current2.next;
        currentR = currentR.next;
    }
    if(carry > 0) currentR.next = new ListNode(carry);
    return Result.next;
};