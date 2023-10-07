function swap(A, i, j) {
  const temp = A[i]
  A[i] = A[j]
  A[j] = temp
}

function solve(A) {
  for (let i = 0; i < A.length; i++) {
    const current = A[i] - 1
    if (current >= 0 && current < A.length) {
      continue
    }
    swap(A, i, current)
  }

  return A
}

const res1 = solve([1, 2, 0])
console.log({ res1 })