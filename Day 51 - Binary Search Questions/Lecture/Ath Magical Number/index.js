// Only works when A > B
function gcd(A, B) {
  if (B === 0) {
    return A
  }
  return gcd(B, A % B)
}

// Ensures A > B
function solveGCD(A, B) {
  const absA = Math.abs(A)
  const absB = Math.abs(B)
  if (absA > absB) {
    return gcd(absA, absB)
  }
  return gcd(absB, absA)
}

// number is magical if divisible by b or c
function solve(A, B, C) {
  const mod = 1e9 + 7
  let l = 1
  let r = A * Math.min(B, C)
  const lcm = (B * C) / solveGCD(B, C)
  while (l <= r) {
    const mid = Math.floor((l+r)/2)
    const c = Math.floor(mid/B) + Math.floor(mid/C) - Math.floor(mid/lcm)
    if (C === A) {
      ans = mid
      r = mid - 1
    } else if (C < A) {
      l = mid + 1
    } else {
      r = mid - 1
    }
  }
  return ans % mod
}