

function leaders(A) {
  let count = 1
  let max = A[A.length - 1]
  for (let i = A.length - 2; i >= 0; i--) {
    let current = A[i]
    if (current > max) {
      max = current
      count++
    }
  }
  return count
}