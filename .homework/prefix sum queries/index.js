// You are given an integer array A of length N.
// You are also given a 2D integer array B with dimensions M x 2, where each row denotes a [L, R] query.
// For each query, you have to find the sum of all elements from L to R indices in A (0 - indexed).
// More formally, find A[L] + A[L + 1] + A[L + 2] +... + A[R - 1] + A[R] for each query.

function psum(A, B) {
  const psum = [A[0]]
  for (let i = 1; i < A.length; i++) {
    let sum = A[i] + psum[i-1]
    psum.push(sum)
  }

  let results = []
  for (let i = 0; i < B.length; i++) {
    const [left, right] = B[i]
    if (left === 0) {
      results.push(psum[right])
    } else {
      let sum = psum[right] - psum[left - 1]
      results.push(sum)
    }
  }
  return results
}

const res = psum([1, 2, 3, 4, 5], [[0, 3], [1, 2]])
console.log({res})