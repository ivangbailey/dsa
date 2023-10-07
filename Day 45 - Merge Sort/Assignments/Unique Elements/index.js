function solve(A) {
  A.sort((a, b) => a - b)
  let count = 0
  for (let i = 1; i < A.length; i++) {
    if (A[i-1] > A[i]) {
      count += (A[i-1] - A[i])
      A[i] = A[i-1]
    }
    if (A[i-1] === A[i]) {
      A[i]++
      count++
    }
  }
  return count
}

const res1 = solve([2, 4, 3])
console.log({res1})