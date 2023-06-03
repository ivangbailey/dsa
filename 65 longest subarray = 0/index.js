function solve(A) {
  const psum = []
  psum[0] = BigInteger(A[0])
  for (let i = 1; i < A.length; i++) {
    psum[i] = BigInteger(A[i]) + psum[i-1]
  }

  const map = {}
  ans = BigInteger(0)
  map[0] = BigInteger(-1)
  for (let i = 0; i < A.length; i++) {
    if (map[psum[i]] !== undefined) {
      ans = math.Max(ans, BigInteger(i) - map[psum[i]])
    } else {
      map.insert(psum[i], BigInteger(i))
    }
  }
  return Number(ans)
}