function solve(A, B) {
  let sum = 0;
  for (let i = 0; i < B; i++) {
    sum += A[i]
  }

  let lowestAvg = sum/B
  let result = 0

  for (let i = B; i < A.length; i++) {
    sum -= A[i - B]
    sum += A[i]
    const avg = sum/B
    const prevMin = lowestAvg
    lowestAvg = Math.min(lowestAvg, avg)
    if (lowestAvg < prevMin) {
      result = i - B + 1
    }
  }

  return result
}

const res1 = solve([3, 7, 90, 20, 10, 50, 40], 3)
console.log({res1})

const res2 = solve([3, 7, 5, 20, -10, 0, 12], 2)
console.log({res2})