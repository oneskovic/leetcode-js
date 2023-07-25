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
function sortList(head) {
  quickSort(head, null);
  return head;
}

function quickSort(head, tail) {
  if (head == tail) {
    return;
  }
  const slow = partition(head, tail);
  quickSort(head, slow);
  quickSort(slow.next, tail);
}

function swap(node1, node2) {
  let tmp = node1.val;
  node1.val = node2.val;
  node2.val = tmp;
}

function partition(head, tail) {
  let slow = head,
    fast = head.next;
  let p = head.val;
  while (fast != tail) {
    if (fast.val <= p) {
      slow = slow.next;
      swap(slow, fast);
    }
    fast = fast.next;
  }
  swap(head, slow);
  return slow;
}

