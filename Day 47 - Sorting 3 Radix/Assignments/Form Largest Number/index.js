function compare(A, B) {
  const a = Number(`${A}${B}`)
  const b = Number(`${B}${A}`)
  if (a > b) return -1
  return 1
}

function solve(A) {
  A.sort(compare)
  const result = A.join('')
  if (Number(result) === 0) return 0
  return result
}

// const res1 = solve([3, 30, 34, 5, 9])
// const res2 = solve([2, 3, 9, 0])
const res2 = solve([12, 121])
// const res3 = solve([8, 89])
console.log({ res2 })