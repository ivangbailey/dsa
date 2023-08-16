function solve(A) {
  A.sort((a, b) => a-b)
  const diff = A[1] - A[0]
  for (let i = 0; i < A.length - 1; i++) {
    if (A[i+1] - A[i] !== diff) {
      return 0
    }
  }
  return 1
}

const res1 = solve([3,5,1])
console.log({res1})