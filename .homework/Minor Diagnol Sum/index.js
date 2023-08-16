function solve(A) {
  let result = 0
  let j = 0
  for (let i = Math.min(A.length - 1, A[0].length-1); i >= 0; i--) {
    result += A[i][j]
    j++
  }
  return result
}