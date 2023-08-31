function solve(A) {
  const n = A.length
  let sum = -Infinity
  let ans = A[1]
  for (let i = 0; i < n; i++) {
    sum += A[i]
    ans = Math.max(ans, sum)
  }
  return ans
}