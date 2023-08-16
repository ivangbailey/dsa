// You are given an integer array A of size N.

// You have to perform B operations. In one operation, you can remove either the leftmost or the rightmost element of the array A.

// Find and return the maximum possible sum of the B elements that were removed after the B operations.

// NOTE: Suppose B = 3, and array A contains 10 elements, then you can:

// Remove 3 elements from front and 0 elements from the back, OR
// Remove 2 elements from front and 1 element from the back, OR
// Remove 1 element from front and 2 elements from the back, OR
// Remove 0 elements from front and 3 elements from the back.

function solve(A, B) {
  const prefix = [A[0]]
  const suffix = [A[A.length-1]]

  for (let i = 1; i < A.length; i++) {
    prefix.push(prefix[i-1] + A[i])
    suffix.push(suffix[i-1] + A[A.length-i-1])
  }

  let result = -Infinity
  for (let i = 0; i < B; i++) {
    const preSum = prefix[i]
    const suffSum = suffix[B-i-2] ?? 0
    result = Math.max(result, preSum + suffSum)

    let reversePreSum = suffix[i]
    let reverseSuffSum = prefix[B-i-2] ?? 0
    result = Math.max(result, reversePreSum + reverseSuffSum)
  }

  return result
}

//  A = [5, -2, 3 , 1, 2]
//  B = 3
// expected:  8

const res1 = solve([5, -2, 3, 1, 2], 3)
console.log({res1})