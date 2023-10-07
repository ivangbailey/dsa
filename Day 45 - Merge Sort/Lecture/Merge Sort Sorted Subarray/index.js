function solve(A, l, m, r) {
  const result = []
  let i = l
  let j = m

  while (i !== m-1 || j !== r) {
    if (i !== A.length && A[i] < B[j] || j === B.length) {
      result.push(A[i])
      i++
    } else {
      result.push(B[j])
      j++
    }
  }

  let y = l
  for (let x = l; x <= r; x++) {
    A[x] = result[y]
    y++
  }

  return A
}

const res1 = solve([1, 2, 4, 9, 6, 11, 12, 45])