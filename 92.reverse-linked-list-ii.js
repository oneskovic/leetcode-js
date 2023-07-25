/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
const reverseBetween = function(head, left, right) {
  if(head == null) return head
  const dummy = new ListNode(null, head)
  let num = 0, cur = head
  while (cur) {
    num++
    cur = cur.next
  }
  let idx = 0, pre = null
  cur = dummy
  while (idx < right && idx <= num) {
    if (idx === left - 1) pre = cur
    if (idx >= left) {
      const tmp = pre.next
      pre.next = cur.next
      cur.next = cur.next.next
      pre.next.next = tmp
    }

    if (idx < left) cur = cur.next
    idx++
  }
  return dummy.next
};

