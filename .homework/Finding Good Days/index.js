function solve(A) {
  let result = 0
  for (let i = 0; i < 31; i++){
    if (A&(1<<i)) !== 0
    result++
  }
  return result
}