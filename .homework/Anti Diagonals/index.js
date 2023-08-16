function solve(A) {
  const results = []
  const height = A.length
  const width = A[0].length

  for (let i = 0; i < (A.length*2 - 1); i++) {
    const fill = [...Array(width).fill(0)]
    results.push(fill)
  }

  function populate(i, j, resRow) {
    let k = 0
    while (i < width && j >= 0) {
      results[resRow][k] = A[i][j]
      i++
      j--
      k++
    }
  }

  let resRow = 0
  for (let i = 0; i < height; i++) {
    populate(0, i, resRow)
    resRow++
  }

  for (let i = 1; i < width; i++) {
    populate(i, height-1, resRow)
    resRow++
  }

  return results
}

const input = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]

const res1 = solve(input)
console.log({ res1 })