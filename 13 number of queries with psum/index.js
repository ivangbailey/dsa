
function nQueriesPsum(A, B) {
  // can modify A instead of creating a new array here to save space complexity O(N) -> O(1)
  const psum = [A[0]];

  for (let i = 1; i < A.length; i++) {
    const prev = psum[A.length - 1]
    psum.push(prev + A[i])
  }

  for (let i = 0; i < B.length; i++) {
    const [l, r] = B[i]
    if (l === 0) {
      // just psum[r]
    } else {
      // psum[r] - psum[l-1]
    }
  }
}