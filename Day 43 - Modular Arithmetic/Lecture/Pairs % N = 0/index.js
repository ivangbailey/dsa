// A = array input
// B = modulo value
function solve(A, B) {
  const map = {}
  for (let i = 0; i < A.length; i++) {
    const mod = A[i] % B
    if (!map[mod]) {
      map[mod] = 0
    }
    map[mod] += 1
  }

  let ans = 0
  let x = map[0]
  ans += (x * (x + 1)) / 2
  if (B % 2 === 0) {
    x = map[B/2]
    ans += (x * (x-1)) / 2
  }
  for (let i = 1; i < (B+1)/2; i++) {
    ans += map[i] * map[B-i]
  }
  return ans
}