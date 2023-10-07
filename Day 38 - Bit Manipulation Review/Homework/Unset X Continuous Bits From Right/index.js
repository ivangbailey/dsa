function solve(n, i) {
  for (let i = 0; i < 32; i++) {
    n = (n & (~(1 << i)))
  }
  return n
}

function solveMask(n, i) {
  const mask = n & (~((1 << i) -1))
  return n & mask
}