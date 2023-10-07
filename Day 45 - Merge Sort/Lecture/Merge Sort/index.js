function solve(A, l, r) {
  if (l === r) {
    return
  }

  const middle = Math.ceil((l+r) / 2)
  solve(A, l, mid)
  solve(A, mid+1, r)
  mergeSortChunk(A, l, mid+1, r)
}