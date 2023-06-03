function solve(A) {
  const set = new Set(A)
  return A.length === set.size()
}