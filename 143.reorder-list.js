/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
const reorderList = function(head) {
  if(head == null) return head
  let slow = head, fast = head
  while(fast && fast.next) {
    slow = slow.next
    fast = fast.next.next
  }
  let head2 = reverse(slow.next)
  slow.next = null
  
  while(head && head2) {
    const next = head.next, next2 = head2.next
    head2.next = head.next
    head.next = head2
    head = next
    head2 = next2
  }
  
  function reverse(node) {
    let pre = null, cur = node
    while(cur) {
      const tmp = cur.next
      cur.next = pre
      pre = cur
      cur = tmp
    }
    return pre
  }
};



