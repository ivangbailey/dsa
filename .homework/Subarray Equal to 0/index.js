function solve(A) {
  const psum = [A[0]]
  for (let i = 1; i < A.length; i++) {
    psum[i] = psum[i-1] + A[i]
    if (psum[i] === 0) {
      return Number(true)
    }
  }

  const unique = new Set(psum)
  return unique.size !== A.length
}