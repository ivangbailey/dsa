function solve(N) {
  if (N <= 1) {
    return N
  }
  return solve(N-1) + solve(N-2)
}