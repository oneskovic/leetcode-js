/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
const getIntersectionNode = function(headA, headB) {
  let a = headA, b = headB
  while(a !== b) {
    a = a == null ? headB : a.next
    b = b == null ? headA : b.next
  }
  return a
};

