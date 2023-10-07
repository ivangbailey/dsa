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

function solveRemoveOne(A) {
  const pre = [A[0]]
  for (let i = 1; i < A.length; i++) {
    pre[i] = solve(pre[i-1], A[i])
  }

  const suff = Array(A.length)
  suff[suff.length-1] = A[A.length-1]
  for (let i = A.length - 2; i >= 0; i--) {
    suff[i] = solve(suff[i+ 1], A[i])
  }

  let ans = 0
  for (let i = 0; i < A.length; i++) {
    const left = pre[i-1]
    const right = suff[i+1]
    const g = solve(left || 0, right || 0)
    ans = Math.max(ans, g)
  }

  return ans
}

const res1 = solveRemoveOne([3,9,6,8,3])
console.log({res1})