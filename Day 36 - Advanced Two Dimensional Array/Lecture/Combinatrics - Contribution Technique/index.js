function solve(A) {
  let result = 0
  const n = A.length
  const m = A[0].length
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      const contributions = (i + 1) * (j + 1) * (n - i) * (m - j)
      result += contributions * A[i][j]
    }
  }

  return result
}

const res1 = solve([
  [1,2,3],
  [4,5,6],
  [7,8,9],
  [10,11,12]
])
console.log(res1)