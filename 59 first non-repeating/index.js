function solve(A) {
  let ans = null
  let set = new Set()
  for (let i = A.length; i >= 0; i--) {
    if (!set.has(A[i])) {
      set.add(A[i])
      ans = A[i]
    }
  }
  return ans
}