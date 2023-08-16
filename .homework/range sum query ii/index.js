// You are given an integer array A of length N.
//  You are also given a 2D integer array B with dimensions M x 2, where each row denotes a [L, R] query.
//  For each query, you have to find the sum of all elements from L to R indices in A (0 - indexed).
//  More formally, find A[L] + A[L + 1] + A[L + 2] +... + A[R - 1] + A[R] for each query.

function rangeSumQuery(A, B) {
  const psum = [A[0]]
  for (let i = 1; i < A.length; i++) {
    psum[i] = psum[i-1] + A[i]
  }
  console.log({psum})

  const results = []

  for (let i = 0; i < B.length; i++) {
    const query = B[i]
    const [left, right] = query
    if (left === 0) {
      results.push(psum[right])
    } else if (left === right) {
      results.push(A[left])
    } else {
      const li = Math.max(left-1, 0)
      const sum = psum[right] - psum[li]
      results.push(sum)
    }
  }
  return results
}

const ex1 = rangeSumQuery([6, 3, 3, 6], [[0, 3], [0, 2]])
console.log({ex1})