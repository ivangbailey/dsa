function solveSlow(A, B) {
  function slowPow(A, N, M) {
    if (N === 0) return 1
    // (A ^ N) % M = (A * A * N-1) % M
    const recursiveResult = slowPow(A, N-1, M)
    // can overflow so use BigInt
    const ans = (BigInt(recursiveResult) * BigInt(A)) % BigInt(M)
    return Number(ans)
  }

  const C = 1e9 + 7
  const result = slowPow(A, B, C)
  return result
}

const res1 = solveSlow(2, 2)
const res2 = solveSlow(2, 27)
console.log({res1, res2})