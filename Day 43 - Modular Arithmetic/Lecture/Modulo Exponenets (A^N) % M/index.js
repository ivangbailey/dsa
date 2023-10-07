function solve(A, N, M) {
  let ans = BigInt(1)
  for (let i = 1; i < N; i++) {
    ans = (ans * BigInt(A)) % BigInt(M)
  }
  return Number(ans)
}

function recursive(A, N, M) {
  if (N === 0) return 1
  const res = BigInt(recursive(A, N-1, M))
  const ans = (res * BigInt(A)) % BigInt(M)
  return Number(ans)
}