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
const reverseList = function(head) {
  if(head == null) return head
  const pre = new ListNode(null, head)
  let cur = head
  while(cur.next) {
    const tmp = pre.next
    pre.next = cur.next
    cur.next = cur.next.next
    pre.next.next = tmp
  }

  return pre.next
};

