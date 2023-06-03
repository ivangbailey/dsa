function flipCase(A) {
  const diff = 'a' - 'A'
  for (let i = 0; i < A.length; i++) {
    if (A[i] >= 'a') {
      A[i] = String.fromCharCode(A[i] - diff)
    } else {
      A[i] = String.fromCharCode(A[i] + diff)
    }
  }
  return A
}

function flipCaseBitWise(A) {
  for (let i = 0; i < A.length; i++) {
    A[i] = String.fromCharCode(A[i] ^ (1<<5))
  }
  return A
}