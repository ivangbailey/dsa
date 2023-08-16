function solve(A) {
  let result = BigInt(0)
  for (let i = 0; i < A.length; i++) {
    const left = i + 1
    const right = A.length - i
    const sum = BigInt(BigInt(A[i]) * BigInt(right * left))
    result += sum
  }
  return result
}