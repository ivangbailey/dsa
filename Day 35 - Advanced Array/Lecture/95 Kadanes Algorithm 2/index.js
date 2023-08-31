function solve(A) {
  let sum = 0
  let answer = -Infinity
  for (let i = 0; i < A.length; i++) {
    const current = A[i]
    sum += current
    answer = Math.max(answer, sum)
    if (sum < 0) sum = 0
  }
  return answer
}

const res1 = solve([-143, -20])
console.log({res1})