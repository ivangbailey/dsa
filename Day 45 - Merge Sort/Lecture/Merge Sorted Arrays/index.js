function solve(A, B) {
  const result = []
  let i = 0
  let j = 0

  while (i !== A.length || j !== B.length) {
    if (i !== A.length && A[i] < B[j] || j === B.length) {
      result.push(A[i])
      i++
    } else {
      result.push(B[j])
      j++
    }
  }

  return result
}

const res1 = solve([1, 3, 5], [2, 4, 6])
const res2 = solve([1, 2, 3], [4, 5, 6])
console.log({res1, res2})
