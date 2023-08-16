function solve(A) {
  let result = ''
  for (let i = 0; i < A[0].length; i++) {
    let letter = A[0][i]
    for (let j = 0; j < A.length; j++) {
      if (A[j][i] !== letter) {
        return result
      }
    }
    result = result + letter
  }
  return result
}

const res1 = solve(['ABCD'])
console.log({res1})