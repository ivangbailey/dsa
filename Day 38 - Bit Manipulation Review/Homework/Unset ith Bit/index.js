function solve(A, B) {
  const flag = 1 << B
  const set = A & flag
  if (set) {
    return A ^ flag
  }
  return A
}

const res1 = solve(5, 2)
console.log({res1})