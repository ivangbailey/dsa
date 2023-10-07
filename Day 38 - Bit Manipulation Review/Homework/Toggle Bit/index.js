function solve(n, i) {
  return (n ^ (1 << i))
}

const res1 = solve(4, 1)
console.log({ res1 })
