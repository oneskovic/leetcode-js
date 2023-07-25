/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
const partition = function(head, x) {
    const leftHead = new ListNode(); 
    const rightHead = new ListNode(); 
    let left = leftHead;
    let right = rightHead;
  
    // split list into two sides, left if val < x, else right
    for (let node = head; node !== null; node = node.next) {
      if (node.val < x) {
        left.next = node;
        left = node;
      } else {
        right.next = node;
        right = node;
      }
    }
  
    // combine the two sides
    left.next = rightHead.next;
    right.next = null;
  
    return leftHead.next;
};

