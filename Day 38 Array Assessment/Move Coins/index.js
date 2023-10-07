function solve(A) {
  const odds = 0
  const evens = 0

  for (let i = 0; i < A.length; i++) {
    if (A[i] % 2 === 0) {
      evens++
    } else {
      odds++
    }
  }

  return Math.min(odds, evens)
}

const res1 = solve([2, 4])
console.log({res1})