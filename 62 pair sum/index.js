
function solve(A, B) {
  const set = new Set()
  let multiplier = B >= 0 ? 1 : -1
  for (let i = 0; i < A.length; i++) {
    const curr = A[i]
    const diff = B - (curr * multiplier)
    if (set.has(diff)) {
      return true
    }
    set.add(curr)
  }
  return false
}

console.log(solve([5,4,3,2,1,0,-1,], 4))