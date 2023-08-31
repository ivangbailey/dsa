function solve(A, B, C='0') {
  console.log({A, C})
  if (A === 0) {
    return C[B]
  }
  let nextRow = ''
  for (let i = 0; i < C.length; i++) {
    if (C[i] === '0') nextRow += '01'
    if (C[i] === '1') nextRow += '10'
  }

  return solve(A-1, B, nextRow)
}

const res1 = solve(10, 1)