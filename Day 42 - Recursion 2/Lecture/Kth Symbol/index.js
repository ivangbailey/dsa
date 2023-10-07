function solve(A) {
  if (A === 1) {
    return [0]
  }
  const prevRow = solve(A-1)
  const row = []
  for (let i = 0; i < prevRow.length; i++) {
    if (prevRow[i] === 0) {
      row.push(0)
      row.push(1)
    } else {
      row.push(1)
      row.push(0)
    }
  }
  return row
}

const res1 = solve(7)
console.log({res1, len: res1.length})