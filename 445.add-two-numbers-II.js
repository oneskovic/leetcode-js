/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = function(head1, head2) {
  const r1 = reverse(head1), r2 = reverse(head2)
  let l1 = r1, l2 = r2, inc = 0
  let dummy = new ListNode()
  let pre = dummy
  while(l1 || l2) {
    let val = inc
    if(l1) {
      val += l1.val
      l1 = l1.next
    }
    if(l2) {
      val += l2.val
      l2 = l2.next
    }
    if(val > 9) inc = 1
    else inc = 0
    const cur = new ListNode(val % 10)
    pre.next = cur
    pre = cur
  }
  if (inc) {
    pre.next = new ListNode(1)
  }
  return reverse(dummy.next) 
};

function reverse(head) {
  const dummy = new ListNode()
  dummy.next = head
  let len = 0, cur = head
  while(cur) {
    len++
    cur = cur.next
  }
  let p = dummy, tail = head, tmp = null
  for(let i = 0; i < len - 1; i++) {
    tmp = p.next
    p.next = tail.next
    tail.next = tail.next.next
    p.next.next = tmp
  }
  return dummy.next
}


