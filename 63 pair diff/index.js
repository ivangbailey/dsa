
function solve(A, B) {
  const set = new Set()
  let multiplier = B >= 0 ? 1 : -1
  for (let i = 0; i < A.length; i++) {
    const curr = A[i]
    const diff = curr - B
    const sum = B + curr
    if (set.has(diff) || set.has(sum)) {
      return true
    }
    set.add(curr)
  }
  return false
}
