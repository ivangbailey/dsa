function solve(A) {
  A.sort((a, b) => a - b)
  console.log(A)
  let missing = []
  let offset = 0
  for (let i = 0; i < A.length; i++) {
    const current = A[i]
    let expected = i + 1 + offset
    if (current !== expected) {
      missing.push(expected)
      offset++
      expected++
    }
    if (expected !== current) i--
    if (missing.length === 2) return missing
    previous = A[i]
  }

  previous++
  while (missing.length < 2) {
    missing.push(previous)
    previous++
  }

  return missing
}

// const res1 = solve([3, 2, 4])
// const res2 = solve([5, 1, 3, 6])
const res3 = solve([1, 4, 5])
const res3 = solve([4, 2, 3, 5])

console.log({ res3 })
