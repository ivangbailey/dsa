function solve(A) {
  const count = {}
  for (let i = 0; i < A.length; i++) {
    const element = A[i]
    count[element] = Number(count[element] || 0) + 1
  }

  let result = 0
  const keys = Object.keys(count)
  for (let i = 0; i < keys.length; i++) {
    if (count[keys[i]] === 1) {
      result ++
    }
  }

  return result
}