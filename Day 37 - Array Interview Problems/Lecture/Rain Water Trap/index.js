function solve(A) {
  const n = A.length
  let result = 0
  const maxR = Array(n).fill(null)
  const maxL = Array(n).fill(null)

  maxR[n - 1] = A[n - 1]
  for (let i = n - 1; i >= 0; i--) {
    maxR[i] = Math.max(maxR[i + 1], A[i])
  }

  maxL[0] = A[0]
  for (let i = 0; i < n; i++) {
    maxL[i] = Math.max(maxL[i -1], A[i])
  }

  for (let i = 0; i < n; i++) {
    result += Math.min(maxL[i], maxR[i]) - A[i]
  }

  return result
}