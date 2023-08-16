function solve(A) {
  const result = []
  const matrix = []
  for (let i = 0; i < A; i++) {
    let row = Array(A).fill(0).map(a => a)
    matrix.push(row)
  }

  let value = 1
  let r = 0
  let c = 0

  while (A > 1) {
    for (let i = 1; i < A; i++) {
      matrix[r][c] = value
      value++
      c++
    }
    for (let i = 1; i < A; i++) {
      matrix[r][c] = value
      value++
      r++
    }
    for (let i = 1; i < A; i++) {
      matrix[r][c] = value
      value++
      c--
    }
    for (let i = 1; i < A; i++) {
      matrix[r][c] = value
      value++
      r--
    }
    r++
    c++
    A -= 2
  }
  if (A === 1) {
    matrix[r][c] = value
  }

  return matrix
}

const res1 = solve(5)
console.log({res1})