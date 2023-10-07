

function solve(A) {
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

  function compare(a, b) {
    const fa = countFactors(a)
    const fb = countFactors(b)
    if (fa === fb) {
      return a-b
    }
    if (fa > fb) {
      return 1
    }
    return -1
  }

  A.sort(compare)
  return A
}

const res1 = solve([36,13,13,26,37,28,27,43,7])
console.log({res1})