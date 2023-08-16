function solve(A) {
  const p = 8
  let remainder = 0
  let power = 1
  for (let i = A.length - 1; i >= 0; i--) {
    remainder = (remainder + (A[i] * power)) % p
    power = (power * 10) % p
  }
  const result = Number(remainder === 0)
  return result
}

const res1 = solve('10')
console.log({res1})