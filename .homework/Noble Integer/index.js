function solve(A) {
  A.sort((a, b) => a-b)
  for (let i = 0; i < A.length; i++) {
    if ((i !== A.length - 1) && A[i] === A[i + 1]) {
      continue
    }
    if ((A.length - i - 1) === A[i]) {
      return 1
    }
  }
  return -1
}