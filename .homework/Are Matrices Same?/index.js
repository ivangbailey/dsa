function solve(A, B) {

  for (let i = 0; i < A.length; i++) {
    for (let j = 0; j < A[i].length; j++) {
      if (A[i][j] !== B[i][j]) {
        return Number(false)
      }
    }
  }
  return Number(true)
}