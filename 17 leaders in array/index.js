

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

function getLeaders(A) {
  const results = []
  let max = -Infinity
  for (let i = A.length - 1; i >= 0; i--) {
    let current = A[i]
    if (current > max) {
      max = current
      results.push(current)
    }
  }
  return results
}