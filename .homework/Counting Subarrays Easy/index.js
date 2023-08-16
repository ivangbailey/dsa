// Given an array A of N non-negative numbers and a non-negative number B,
// you need to find the number of subarrays in A with a sum less than B.
// We may assume that there is no overflow.

function solve(A, B) {
  let results = 0
  for (let i = 0; i < A.length; i++) {
    let sum = BigInt(0)
    for (let j = i; j < A.length; j++) {
      sum += A[j]
      if (sum >= B) {
        continue
      }
      results++
    }
  }
  return results
}