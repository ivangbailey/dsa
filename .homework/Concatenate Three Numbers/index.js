function solve(A, B, C) {
  const elements = [
    Number(A),
    Number(B),
    Number(C)
  ]
  elements.sort()
  const result = elements.join('')
  return result
}