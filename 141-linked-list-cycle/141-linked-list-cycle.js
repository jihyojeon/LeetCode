/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    
    if (!head) {
        return false
    }
    
    let winner = head;
    let loser = head;
    
    while (winner.next && winner.next.next) {
        winner = winner.next.next;
        loser = loser.next;
        if (winner === loser) {
            return true
        }
    }

    return false
    
};