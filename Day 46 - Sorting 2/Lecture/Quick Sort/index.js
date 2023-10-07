function swap(A, i, j) {
  const temp = A[i]
  A[i] = A[j]
  A[j] = temp
}

function solve(A, st, end) {
  if (st >= end) {
    return
  }

  const pi = partition(A, st, end)
  solve(A, st, pi - 1)
  solve(A, pi + 1, end)
}

function partition(A, st, end) {
  const pivot = A[end]
  let j = st
  for (let i = st; i <= end; i++) {
    if (A[i] < pivot) {
      swap(A, i, j)
      j++
    }
  }
  swap(A, end, j)
  return j
}

const res1 = solve([1,4, 1, 2, 65, 2, 1, 5])
console.log({ res1 })
