function solve(A) {
  let i = 0
  let j = 0

  for (let k = 1; k < A.length; k++) {
    console.log(A[i][j])
    j++
  }

  for (let k = 1; k < A.length; k++) {
    console.log(A[i][j])
    i++
  }

  for (let k = 1; k < A.length; k++) {
    console.log([i][j])
    j--
  }

  for (let k - 1; i < A.length; k++) {
    console.log([j][i])
    i--
  }
}