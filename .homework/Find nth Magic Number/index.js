function solve(A) {
  let ans = 0
  let power = 5
  while (A > 0) {
    const r = A % 2
    A = A / 2
    ans += (r * power)
    power *= 5
  }
  return ans
}

function solve2(A) {
  const bits = Array(32).fill(0).map((a) => a)
  let quotient = A
  let i = 31
  while (quotient > 0) {
    quotient /= 2
    const remainder = (quotient % 1) !== 0
    quotient = Math.floor(quotient)
    let bit = remainder ? 1 : 0
    bits[i] = bit
    i--
  }

  let result = 0
  let power = 1
  for (let i = 0; i < bits.length; i++) {
    let bit = bits[i]
    result += (bit*power)
    power *= 2
  }
  return result
}

const res1 = solve(5)
console.log({res1})