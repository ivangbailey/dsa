function solve(A, B) {
  const track = new Set(B)
  const count = {}
  for (let i = 0; i < A.length; i++) {
    const element = A[i]
    if (track.has(A[i])) {
      count[element] = Number(count[element] || 0) + 1
    }
  }

  let result = []
  for (let i = 0; i < B.length; i++) {
    result.push(Number(count[B[i]] || 0))
  }

  return result
}