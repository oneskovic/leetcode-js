/**
 * @param {number} length
 */
const SnapshotArray = function(length) {
  this.snaps = Array(length)
  this.snapId = 0
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
SnapshotArray.prototype.set = function(index, val) {
  if(this.snaps[index] == null) {
    this.snaps[index] = {}
  }
  this.snaps[index][this.snapId] = val
};

/**
 * @return {number}
 */
SnapshotArray.prototype.snap = function() {
  return this.snapId++
};

/** 
 * @param {number} index 
 * @param {number} snap_id
 * @return {number}
 */
SnapshotArray.prototype.get = function(index, snap_id) {
  let res = 0
  let id = snap_id
  while(id >= 0) {
    if(this.snaps[index] == null || this.snaps[index][id] == null) id--
    else {
      res = this.snaps[index][id]
      break
    }
  }
  
  return res
};

/** 
 * Your SnapshotArray object will be instantiated and called as such:
 * var obj = new SnapshotArray(length)
 * obj.set(index,val)
 * var param_2 = obj.snap()
 * var param_3 = obj.get(index,snap_id)
 */

