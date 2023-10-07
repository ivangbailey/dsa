function solve(A, st, end, k) {
  if (st === end) { return }
  const pi = partition()
  if (pi === k-1) {
    return a[pi]
  } else if (pi > k-1) {
    return solve(A, st, pi - 1, k)
  } else {
    return solve(A, pi + 1, end, k)
  }
}