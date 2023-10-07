// Uses Fermat's Little Theorum
function solve(A, B) {
  function fastPower(A, B, mod) {
    let ans = BigInt(1)

    while (B > 0) {
      if (B & 1n) {
        ans = (ans * A) % mod
      }

      A = ((A % mod) * (A % mod)) % mod
      B = B >> 1n
    }

    return ans % mod
  }

  function bigFactorial(n, mod) {
    let result = 1n
    for (let i = BigInt(2); i <= n; i += 1n) {
      result = (result * i) % (mod - 1n)
    }
    return result
  }

  const mod = BigInt(1e9 + 7)
  const fac = bigFactorial(B, mod)

  const result = fastPower(BigInt(A), fac, mod)
  return Number(result)
}

const res1 = solve(2, 2)
console.log({ res1 })