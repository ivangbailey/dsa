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

function solveArray(A) {
  let ans = A[0]
  for (let i = 1; i < A.length; i++) {
    ans = solve(ans, A[i])
  }
  return ans
}

const res1 = solveArray([-13, 13, 169])
const res2 = solveArray([22, 11, 121, 11**3])
const res3 = solveArray([22, 11, 121, 11**3, 2])
console.log({ res1, res2, res3 })