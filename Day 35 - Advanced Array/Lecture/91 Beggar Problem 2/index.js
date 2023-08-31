function solve(A, B) {
  const result = Array(A).fill(0).map(el => el)
  for (let i = 0; i < B.length; i++) {
    let [left, right, value] = B[i]
    left--
    result[left] += value
    if (right !== -1 && right < A) {
      result[right] -= value
    }
  }

  for (let i = 1; i < result.length; i++) {
    result[i] += result[i-1]
  }

  return result
}

const res1 = solve(5, [
  [1, 2, 10],
  [2, 3, 20],
  [2, 5, 25]
])
console.log({ res1 })