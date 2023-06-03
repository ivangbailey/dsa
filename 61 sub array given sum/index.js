
function containsSumZero(A) {
  const psum = []
  // construct psum
  const set = new Set()
  for (let i = 0; i < psum.length; i++) {
    const curr = A[i]
    if (curr === 0) {
      return true
    }
    set.add(psum[i])
  }
  if (set.size() < A.length) {
    return true
  }
  return false
}