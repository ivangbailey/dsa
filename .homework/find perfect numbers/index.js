// You are given an integer A. You have to tell whether it is a perfect number or not.

// Perfect number is a positive integer which is equal to the sum of its proper positive divisors.

// A proper divisor of a natural number is the divisor that is strictly less than the number.

function isPerfectNumber(A) {
  const isPositive = (num) => { return num >= 0 }
  const isProper = (num) => { return num < A }
  const sum = (divisors) => { return divisors.reduce((total, next) => total + next, 0) }

  const sqrt = Math.ceil(Math.sqrt(A))
  const divisors = []
  if (!isPositive(A)) {
    return 0
  }

  for (let i = 0; i <= sqrt; i++) {
    if (!isProper(i) || divisors.includes(i)) {
      continue
    }
    if (A % i !== 0) {
      continue
    }

    const other = A / i
    divisors.push(i)
    if (other !== i && i !== 1) {
      divisors.push(other)
    }
  }
  console.log({A, divisors})

  const total = sum(divisors)
  console.log({A, total})
  const result = total === A
  return Number(result)
}

const res28 = isPerfectNumber(28)

console.log({ res28 })