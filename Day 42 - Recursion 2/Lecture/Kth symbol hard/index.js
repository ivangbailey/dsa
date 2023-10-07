function solve(A, B) {
  if (A === 0) {
    return 0
  }
  const p = solve(A - 1, B / 2)
  if (B % 2 === 0) {
    return p
  }
  return 1 - p
}

const res1 = solve(1000, 55)
console.log({ res1 })