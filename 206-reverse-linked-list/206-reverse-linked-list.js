/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    let reversedList = null;
    while (head) {
        reversedList = new ListNode(head.val, reversedList);
        head = head.next;
    }
    return reversedList
};