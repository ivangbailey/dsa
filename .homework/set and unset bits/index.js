
// ex:
// 12, 2, 3
// given
// 1 1 0 0
// expected
// 1 0 0 0

function solve(A, B, C) {
  let bits = []
  let quotient = A
  while (quotient > 0) {
    quotient /= 2
    const remainder = (quotient % 1) !== 0
    quotient = Math.floor(quotient)
    let bit = remainder ? 1 : 0
    bits.push(bit)
  }
  bits = bits.reverse()
  bits = [...Array(32-bits.length).fill(0), ...bits]
  const orig = [...bits]
  const offB = 32 - B
  const offC = 32 - C
  console.log(bits)
  for (let i = 31; i >= offC; i--) {
    bits[i] = 0
  }
  for (let i = 31; i >= offB; i--) {
    bits[i] = orig[i]
  }
  return bits
}

function solve2(A, B, C) {
  for (let i = B; i < C; i++) {
    if ((A & (1<<i)) !== 0) {
      A = (A^(1<<i))
    }
  }
}

console.log(solve(21, 1, 3))