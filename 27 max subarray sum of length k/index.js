function solve(A, k) {
  let sum = 0
  for (let i = 0; i < k; i++) {
    sum += A[i]
  }

  let result = sum
  for (let end = k; end < A.length; end++) {
    const start = end - k
    sum -= A[start]
    sum += A[end]
    result = Math.max(sum, result)
  }
  return result
}

const res = solve([-3, 4, -2, 5, 3, -2, 8, 2, -1, 4], 5)
console.log({res})