// function solve(A) {
//   let i = 0
//   let j = 0

//   for (let k = 1; k < A.length; k++) {
//     console.log(A[i][j])
//     j++
//   }

//   for (let k = 1; k < A.length; k++) {
//     console.log(A[i][j])
//     i++
//   }

//   for (let k = 1; k < A.length; k++) {
//     console.log([i][j])
//     j--
//   }

//   for (let k - 1; i < A.length; k++) {
//     console.log([j][i])
//     i--
//   }
// }

// transpose then reverse
function solve2(A) {
  for (let i = 0; i < A.length; i++) {
    for (let j = 0; j < i; j++) {
      const temp = A[j][i]
      A[j][i] = A[i][j]
      A[i][j] = temp
    }
  }
  console.log(A)
  for (let i = 0; i < A.length; i++) {
    A[i].reverse()
  }
  return A
}

const res1 = solve2([
  [1, 2],
  [3, 4]
])
console.log({res1})