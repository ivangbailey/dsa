function solve(A) {
  let result = 0
  let sum = 0
  A.sort((a, b) => a-b)
  for (let i = 0; i < A.length; i++) {
    sum += A[i]
  }
  for (let i = A.length - 1; i >= 0; i--) {
    result += sum
    sum -= A[i]
  }
  return result
}

const res1 = solve([8,0,10])
console.log({res1})