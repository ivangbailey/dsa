
function columnSums(A) {
  const results = []
  let columnLength = A[0].length
  for (let i = 0; i < columnLength; i++) {
    let sum = 0
    for (let j = 0; j < A.length; j++) {
      sum += A[j][i]
    }
    results.push(sum)
  }
  return results
}