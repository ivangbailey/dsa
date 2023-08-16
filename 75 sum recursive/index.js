function sum(N) {
  if (N === 1) { return N }
  return sum(N-1) + N
}