function solve(A, B) {
  const psum = Array(A.length)
  for (let i = 0; i < A.length; i++) {
    psum[i] = Array(A[i].length).fill(null)
  }

  // top left corner
  psum[0][0] = A[0][0]

  // fill first row
  for (let i = 1; i < psum[0].length; i++) {
    psum[0][i] = psum[0][i-1] + A[0][i]
  }

  // fill first column
  for (let i = 1; i < psum.length; i++) {
    psum[i][0] = psum[i-1][0] + A[i][0]
  }

  // fill rest of body
  for (let i = 1; i < psum.length; i++) {
    for (let j = 1; j < psum[i].length; j++) {
      const upLeft = psum[i-1][j-1]
      const up = psum[i-1][j]
      const left = psum[i][j-1]
      const value = up + left - upLeft + A[i][j]
      psum[i][j] = value
    }
  }

  console.log(psum)
}

const res1 = solve([
  [1, 2, 3],
  [5, 1, 2],
  [6, -1, 2],
])