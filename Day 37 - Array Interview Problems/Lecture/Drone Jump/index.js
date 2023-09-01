// Use carry backward to generate "Right Max" array values
function solve(A) {
  const n = A.length
  let maxR = A[n-1]
  let result = 0
  for (let i = n - 2; i >= 0; i--) {
    maxR = Math.max(maxR, A[i])
    result = Math.max(maxR - A[i], result)
  }
  return result
}