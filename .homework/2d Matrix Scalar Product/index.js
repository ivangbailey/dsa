function solve(A, B) {
  for (let i = 0; i < A.length; i++) {
    for (let j = 0; j < A[i].length; j++) {
      A[i][j] *= B
    }
  }
  return A
}