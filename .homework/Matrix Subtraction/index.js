function solve(AB) {
  const results = []
  A.forEach((row, i) => {
    const computedRow = row.map((item, j) => (item - B[i][j]))
    results.push(computedRow)
  })
  return results
}