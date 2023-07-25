/**
 * @param {string[]} logs
 * @return {string[]}
 */
const reorderLogFiles = function(logs) {
  const letterLog = [],
    digitLog = []
  for (let log of logs) {
    if (isNaN(log.split(' ')[1])) {
      letterLog.push(log)
    } else {
      digitLog.push(log)
    }
  }
  letterLog.sort((log1, log2) => {
    let body1 = log1.slice(log1.indexOf(' '))
    let body2 = log2.slice(log2.indexOf(' '))
    if (body1 === body2) {
      return log1.split(' ')[0] > log2.split(' ')[0] ? 1 : -1
    } else {
      return body1 > body2 ? 1 : -1
    }
  })
  return [...letterLog, ...digitLog]
}

