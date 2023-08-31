function solve(A) {
  if (A.length === 0) {
    return 0
  }
  const psum = [A[0]]
  for (let i = 1; i < A.length; i++) {
    psum.push(psum[i-1] + A[i])
  }

  const set = new Set(psum)
  if (set.has(0)) {
    return 1
  }

  if (set.size !== A.length) {
    return 1
  }

  return 0
}

const res1 = solve([])
console.log(res1)