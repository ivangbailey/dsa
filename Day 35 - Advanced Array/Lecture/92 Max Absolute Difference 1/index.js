function solve(A) {
  let max = -Infinity
  let min = Infinity

  for (let i = 0; i < A.length; i++) {
    const current = A[i]
    max = Math.max(max, current)
    min = Math.min(min, current)
  }

  const result = max - min
  return result
}