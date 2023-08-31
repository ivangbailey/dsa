function solve(A) {
  if (A <= 2) return A
  return solve(A-1) + solve(A-2) + solve(A-3)
}

console.log(solve(5))