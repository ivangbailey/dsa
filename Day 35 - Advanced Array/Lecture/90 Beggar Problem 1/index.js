function solve(A, B, C) {
  for (let i = 0; i < B.length; i++) {
    const index = B[i]
    const value = C[i]
    A[index] += value
  }

  for (let i = 0; i < A.length; i++) {
    A[i] += A[i-1]
  }

  return A
}