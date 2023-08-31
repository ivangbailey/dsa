function solve(A) {
  let result = BigInt(0)
  for (let i = 0; i < A.length; i++) {
    for (let j = 0; j < A.length; j++) {
      const n = BigInt(A.length)
      const m = BigInt(A[i].length)
      const iB = BigInt(i)
      const jB = BigInt(j)
      const one = BigInt(1)
      result += (iB + one) * (jB + one) * (n - one) * (m - jB)
    }
  }

  return result
}

const res1 = solve([
  [1,2,3],
  [4,5,6],
  [7,8,9],
  [10,11,12]
])
console.log(res1)