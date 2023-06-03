

// iterations: (ei-si+1)/2

function reverse(A, si, ei) {
  while (si < ei) {
    const temp = A[si]
    A[si] = A[ei]
    A[ei] = temp
    si++
    ei--
  }
  return A
}