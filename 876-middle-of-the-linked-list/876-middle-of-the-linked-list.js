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
var middleNode = function(head) {
    let center = head;
    let i=1;
    while(head) {
        i += 1;
        if (i%2 === 1) {
            center = center.next;
        }
        head = head.next;
    }
    return center
};