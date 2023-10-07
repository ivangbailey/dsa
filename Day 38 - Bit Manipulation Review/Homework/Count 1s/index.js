function solve(n) {
  let result = 0
  for (let i = 0; i < 32; i++) {
    const isSet = (n & (1 << i)) !== 0
    if (isSet) {
      result++
    }
  }
  return result
}

const res1 = solve(100)
console.log({res1})