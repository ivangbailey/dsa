function solve(A) {
  let result = 0;
  let invert = false
  for (let i = 0; i < A.length; i++) {
    if ((!invert && A[i] === 0) || (invert && A[i] === 1)) {
      result++
      invert = !invert
    }
  }
  return result
}