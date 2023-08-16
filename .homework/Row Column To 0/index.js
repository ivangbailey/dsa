function solve(A) {
  const rows = new Set()
  const columns = new Set()
  for (let i = 0; i < A.length; i++) {
    for (let j = 0; j < A[0].length; j++) {
      if (A[i][j] === 0) {
        rows.add(i)
        columns.add(j)
      }
    }
  }
  for (const row of rows) {
    A[row] = A[row].map(() => 0)
  }
  for (const column of columns) {
    for (let i = 0; i < A.length; i++) {
      A[i][column] = 0
    }
  }
  return A
}

const res = solve([[1,2,3,4],
  [5,6,7,0],
  [9,2,0,4]])
console.log({res})