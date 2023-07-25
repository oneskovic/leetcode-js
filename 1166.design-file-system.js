
const FileSystem = function() {
  this.m = new Map()
  this.m.set('', 1)
};

/** 
 * @param {string} path 
 * @param {number} value
 * @return {boolean}
 */
FileSystem.prototype.createPath = function(path, value) {
  if(this.m.has(path)) return false
  const p = path.slice(0, path.lastIndexOf('/'))
  if(!this.m.has(p)) return false
  this.m.set(path, value)
  return true
};

/** 
 * @param {string} path
 * @return {number}
 */
FileSystem.prototype.get = function(path) {
  if(!this.m.has(path)) return -1
  return this.m.get(path)
};

/** 
 * Your FileSystem object will be instantiated and called as such:
 * var obj = new FileSystem()
 * var param_1 = obj.createPath(path,value)
 * var param_2 = obj.get(path)
 */

