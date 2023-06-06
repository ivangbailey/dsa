function solve(A) {
  if (N === 1) {
    return 1
  }
  return solve(A-1) + A
}