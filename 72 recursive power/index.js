function pow(N, e) {
  if (e === 0) {
    return 1
  }
  if (e === 1) {
    return N
  }
  return pow(a, e - 1) * a
}