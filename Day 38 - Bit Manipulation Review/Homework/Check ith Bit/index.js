function solve(n, i) {
  const result = (n & (i << i)) !== 0
  return result
}