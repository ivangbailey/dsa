function solve(A) {
  if (A < 10) {
    return Number(A === 1)
  }

  let result = 0
  const numbers = String(A).split('')
  for (let i = 0; i < numbers.length; i++) {
    result += Number(numbers[i])
  }
  return solve(result)
}

const res1 = solve(83557)
console.log({res1})