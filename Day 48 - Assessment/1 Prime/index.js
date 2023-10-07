function countFactors(n) {
  let factors = 0
  const sq = Math.sqrt(n)
  if (n === 1) {
    return 1
  }

  for (let i = 1; i <= sq; i++) {
    if (n % i !== 0) {
      continue
    }

    if (i === sq) {
      factors += 1
    } else {
      factors += 2
    }
  }

  return factors
}

function isPrime(n) {
  return countFactors(n) === 2
}

function solve(A, B) {
  const result = []
  for (let i = A; i < B; i++) {
    if ((i % 10) === 3) {
      if (isPrime(i)) {
        result.push(i)
      }
    }
  }
  return result

}

const res1 = solve(1, 10)
const res2 = solve(5, 30)

console.log({res1, res2})