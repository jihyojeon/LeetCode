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
    var length = 1;
    var thisNode = head;
    while (thisNode.next) {
        length += 1;
        thisNode = thisNode.next;
    }
    var center = Math.floor(length/2);
    var centerNode = head;
    while (center > 0) {
        center -= 1;
        centerNode = centerNode.next;
    }
    return centerNode
};