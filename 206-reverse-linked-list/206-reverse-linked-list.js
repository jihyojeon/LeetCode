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
    if (!head) {
        return head;
    }
    let reversedList = new ListNode(head.val);
    let node = head.next;
    while (node) {
        reversedList = new ListNode(node.val, reversedList);
        node = node.next;
    }
    return reversedList
};