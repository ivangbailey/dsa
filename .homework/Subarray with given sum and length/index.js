function solve(A, B, C) {

  let total = BigInt(0)
  for (let i = 0; i < B; i++) {
    total += A[i]
  }

  if (total === BigInt(C)) {
    return Number(true)
  }

  for (let i = B; i < A.length; i++) {
    const j = i - B
    total -= A[j]
    total += A[i]
    if (total === BigInt(C)) {
      return Number(true)
    }
  }

  return Number(false)
}

// const res1 = solve([4, 3, 2, 6, 1], 3, 11)
// console.log({res1})

const res2 = solve([6,3,3,6,7,8,7,3,7], 2, 10)
console.log({res2})