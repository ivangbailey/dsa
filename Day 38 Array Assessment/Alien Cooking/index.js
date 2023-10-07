function solve(A) {
  let sum = 0
  let answer = -Infinity
  let prev = -Infinity
  for (let i = 0; i < A.length; i++) {
    const current = A[i]
    if (prev >= current) sum = 0
    sum += current
    answer = Math.max(answer, sum)
    if (sum < 0) sum = 0
    prev = A[i]
  }
  return answer
}

const res1 = solve([9, 17, 19, 13, 13, 20, 13])
console.log({res1})