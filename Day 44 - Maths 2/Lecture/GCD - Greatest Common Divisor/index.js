// Only works when A > B
function gcd(A, B) {
  if (B === 0) {
    return A
  }
  return gcd(B, A % B)
}

// Ensures A > B
function solve(A, B) {
  const absA = Math.abs(A)
  const absB = Math.abs(B)
  if (absA > absB) {
    return gcd(absA, absB)
  }
  return gcd(absB, absA)
}

const res1 = solve(8, 40)
const res2 = solve(169, -13)
console.log({res1, res2})