function solve(A) {
  let red = 0
  let white = 0
  let blue = 0
  for (let i = 0; i < A.length; i++) {
    const current = A[i]
    switch (current) {
      case 0: red++; break
      case 1: white++; break
      case 2: blue++; break
    }
  }
  const reds = Array(red).fill(0)
  const whites = Array(white).fill(1)
  const blues = Array(blue).fill(2)
  const results = [...reds, ...whites, ...blues]
  return results
}