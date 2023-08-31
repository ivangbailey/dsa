function solve(A) {
  let minX = Infinity
  let maxX = -Infinity
  let minY = Infinity
  let maxY = -Infinity

  for (let k = 0; k < A.length; k++) {
    const x = A[k] + k
    const y = A[k] - k
    maxX = Math.max(x, maxX)
    minX = Math.min(x, minX)
    maxY = Math.max(y, maxY)
    minY = Math.min(y, minY)
  }

  const result = Math.max((maxX - minX), (maxY - minY))
  return result
}