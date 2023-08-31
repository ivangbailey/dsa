function solve(A = '') {
  if (A.length === 0) {
      return
  }
  const first = A.slice(A.length-1)
  console.log(first)
  solve(A.slice(0, -1))
}

solve('ivan')