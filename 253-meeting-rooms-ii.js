/**

Given an array of meeting time intervals consisting of
start and end times [[s1,e1],[s2,e2],...] (si < ei),
find the minimum number of conference rooms required.

Example 1:

Input: [[0, 30],[5, 10],[15, 20]]
Output: 2
Example 2:

Input: [[7,10],[2,4]]
Output: 1
 
 */

/**
 * @param {number[][]} intervals
 * @return {number}
 */
const minMeetingRooms = function(intervals) {
  const arr = Array(1e6 + 2).fill(0)
  for(const [s, e] of intervals) {
    arr[s]++
    arr[e]--
  }
  let res = arr[0]
  for(let i = 1; i < arr.length; i++) {
    arr[i] += arr[i - 1]
    res = Math.max(res, arr[i])
  }
  
  return res
};

