function solve(A) {
  let results = []
  let height = A.length
  let width = A[0].length

  for (let i = 0; i < width; i++) {
    const fill = [...Array(height).fill(0)]
    results.push(fill)
  }

  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      results[j][i] = A[i][j]
    }
  }

  return results
}