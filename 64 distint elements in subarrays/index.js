function solve(A, B) {
  const results = []
  for (let i = 0; i < A.length - B - 1; i++) {
    let j = i + B + 1
    const subarray = A.slice(i, j)
    const set = new Set(subarray)
    results.push(set.size())
  }
  return results
}