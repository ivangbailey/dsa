let call = 0
function solve(A) {
  call++
  console.log(call)
  if (A % 2 === 0) {
    return 0
  }
  return solve(A-1) + solve(Math.floor(A/2))
}

console.log(solve(2148972357))