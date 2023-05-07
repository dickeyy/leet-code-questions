// /**
//  * Definition for singly-linked list.
//  * function ListNode(val, next) {
//  *     this.val = (val===undefined ? 0 : val)
//  *     this.next = (next===undefined ? null : next)
//  * }
//  */
// /**
//  * @param {ListNode} l1
//  * @param {ListNode} l2
//  * @return {ListNode}
//  */
var addTwoNumbers = function(l1, l2) {
    let carry = 0;
    let l3 = new ListNode(0);
    let head = l3;
    while(l1 || l2 || carry) {
        let sum = 0;
        if(l1) {
            sum += l1.val;
            l1 = l1.next;
        }
        if(l2) {
            sum += l2.val;
            l2 = l2.next;
        } 
        sum += carry;
        carry = Math.floor(sum / 10);
        l3.next = new ListNode(sum % 10);
        l3 = l3.next;
    }
    return head.next;
};