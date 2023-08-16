function solve(A) {
  let result = 0
  for (let i = 0; i < 31; i++){
    if (((A >> i) & 1) === 1) {
      result++
    }
  }
  return result
}