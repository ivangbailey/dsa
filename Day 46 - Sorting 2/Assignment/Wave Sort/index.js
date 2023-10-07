function solve(A) {
  function swap(A, i, j) {
    const temp = A[i]
    A[i] = A[j]
    A[j] = temp
  }
  A.sort((a, b) => a - b)
  for (let i = 0; i < A.length; i++) {
    const j = i + 1
    if (j >= A.length) {
      break
    }
    swap(A, i, j)
    i++
  }

  return A
}

const res1 = solve([1, 2, 3, 4])
console.log({ res1 })