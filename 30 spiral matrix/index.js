function solve(A) {
  let N = A.length
  let i = 0
  let j = 0
  while (N > 1) {
    for (let k = 0; k < N; k++) {
      console.log(A[i][j])
      j++
    }

    for (let k = 0; k < N; k++) {
      console.log(A[i][j])
      i++
    }
    for (let k = 0; k < N; k++) {
      console.log(A[i][j])
      j--
    }
    for (let k = 0; k < N; k++) {
      console.log(A[i][j])
      i--
    }
    i += 1
    j += 1
    N -= 2
    if (N === 1) {
      console.log(A[i][j])
    }
  }
}