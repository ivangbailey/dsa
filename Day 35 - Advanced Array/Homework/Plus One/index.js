function solve(A) {
  while(A[0] === 0) {
    A.shift()
  }
  if (A.length === 0) {
    return [1]
  }
  for (let i = A.length - 1; i >= 0; i--) {
    if (A[i] === 9) {
      A[i] = 0
    } else {
      A[i]++
      return A
    }
  }
  return [1, ...A]
}

// const res1 = solve([9, 9])
// const res2 = solve([1])
console.log(solve([3, 7, 6, 4, 0, 5, 5, 6]))

// console.log({res1, res2})