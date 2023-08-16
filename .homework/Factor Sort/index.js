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

    if (i === sqrt) {
      factors += 1
    } else {
      factors += 2
    }
  }
}

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

      if (i === sqrt) {
        factors += 1
      } else {
        factors += 2
      }
    }
  }
  A.sort((a, b) => countFactors(a) - countFactors(b))
  return A
}