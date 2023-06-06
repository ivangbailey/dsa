function solve(A, B) {
  let needed = 0
  let result = 0
  for (let i = 0; i < A.length; i++) {
    if (A[i] <= B) {
      needed++
    }
  }

  let bad = 0;
  for (let i = 0; i < needed; i++) {
    if (A[i] > B) {
      bad++
    }
  }
  result = bad

  for (let start = 1; start < needed; start++) {
    let end = start + needed
    if (A[start - 1] > B) {
      bad--
    }
    if (A[end] > B) {
      bad++
    }
    result = Math.min(bad, result)
  }
  return result
}

const res = solve([25, 30, 2, 18, 7, 6, 9, 3, 50], 10)
console.log({res})