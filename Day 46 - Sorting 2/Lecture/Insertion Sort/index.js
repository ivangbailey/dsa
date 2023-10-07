function swap(A, i, j) {
  const temp = A[i]
  A[i] = A[j]
  A[j] = temp
}

function solve(A) {
  outer: for (let i = 0; i < A.length; i++) {
    const current = A[i]
    inner: for (let j = i - 1; i >= 0; j--) {
      if (A[j] > A[j+1]) {
        swap(A, j, j+1)
      } else {
        break inner
      }
    }
  }
  return A
}

const res1 = solve([1,4, 1, 2, 65, 2, 1, 5])
console.log({ res1 })