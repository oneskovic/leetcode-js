/**
 * @param {string} IP
 * @return {string}
 */
const validIPAddress = function (IP) {
  if (IP.indexOf('.') > 0) return validIPv4(IP) ? 'IPv4' : 'Neither'
  else return validIPv6(IP) ? 'IPv6' : 'Neither'
}

const validIPv4 = function (IP) {
  const strs = IP.split('.')
  if (strs.length !== 4) return false
  for (let str of strs) {
    if (str.length === 0) return false
    if (str.match(/[^0-9]/)) return false
    if (str.length > 1 && str.charAt(0) === '0') return false
    if (+str > 255) return false
  }
  return true
}

const validIPv6 = function (IP) {
  const strs = IP.split(':')
  if (strs.length !== 8) return false
  for (let str of strs) {
    if (str.length === 0) return false
    if (str.length > 4) return false
    if (str.match(/[^0-9a-fA-F]/g)) return false
  }
  return true
}

