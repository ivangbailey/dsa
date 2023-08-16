function solve(A) {
  let result = 0
  for (let i = 0; i < A.length && i < A[0].length; i++) {
    result += A[i][i]
  }
  return result
}