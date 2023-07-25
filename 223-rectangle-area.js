/**
 * @param {number} A
 * @param {number} B
 * @param {number} C
 * @param {number} D
 * @param {number} E
 * @param {number} F
 * @param {number} G
 * @param {number} H
 * @return {number}
 */
const computeArea = function(A, B, C, D, E, F, G, H) {
  const areaA = (C - A) * (D - B)
  const areaB = (G - E) * (H - F)
  const intersectionArea =
    Math.max(0, Math.min(C, G) - Math.max(A, E)) *
    Math.max(0, Math.min(D, H) - Math.max(B, F))
  return areaA + areaB - intersectionArea
}


