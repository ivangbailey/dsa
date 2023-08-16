
function rowSums(A) {
  const results = []
  for (let i = 0; i < A.length; i++) {
    let sum = 0
    for (let j = 0; j < A[i].length; j++) {
      sum += A[i][j]
    }
    results.push(sum)
  }
  return results
}