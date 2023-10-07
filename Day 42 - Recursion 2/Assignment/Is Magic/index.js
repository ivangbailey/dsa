function recursivelyAddDigits(A) {
  if (A < 10) {
    return A
  }

  const nums = String(A).split('')
  const sum = nums.reduce((total, next) => {
    return total + Number(next)
  }, 0)
  return recursivelyAddDigits(sum)
}

function solve(A) {
  const sum = recursivelyAddDigits(A)
  const result = Number(sum === 1)
  return result
}

const res1 = solve(83557)
const res2 = solve(1291)
console.log({ res1, res2 })