// Given N array of elements, count the number of equilibrium indexes.
// equilibrium index exists when sum of all elements on the left hand side of i equal sum of indexes on right of i

function countEquilibriumIndex(A, N) {
  const psum = [A[0]];
  const N = A.length
  for (let i = 1; i < A.length; i++) {
    const prev = psum[i - 1]
    psum.push(prev + A[i])
  }

  let count = 0
  for (let i = 0; i < N; i++) {
    if (i === 0) {
      if (0 === psum[N-1] - psum[i]) {
        count++
      }
    } else if (psum[i-1] === (psum[N-1] - psum[i])) {
      count++
    }
  }
  return count
}