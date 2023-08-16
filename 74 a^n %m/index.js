function solve(A, B, C) {
  if (A === 0) {
    return 0
  }
  if (B === 0) {
    return 1
  }
  const p = solve(A, B/2, C)
  if (B % 2 === 0) {
    return (p * p) % C
  }
  return (p * p * A) % C
}