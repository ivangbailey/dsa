

function sumWithDeleted(A, B) {
  const psume = [A[0]]
  const psumo = [0]

  let sumE = 0
  let sumO = 0

  for (let i = 1; i < A.length; i++) {
    if (i % 2 === 0) {
      sumE += A[i]
    }
    psume.push(sumE)
  }

  for (let i = 1; i < A.length; i++) {
    if (i % 2 === 1) {
      sumO += A[i]
    }
    psumo.push(sumO)
  }

  // create psum for evens, psum for odds
  let count = 0
  for (let i = 0; i < A.length; i++) {
    let sumEven = psumo[A.length - 1] - psumo[i]
    if (i !== 0) {
      sumEven += psume[i-1]
    }
    let sumOdd = psume[A.length-1] - psume[i]
    if (i !== 0) {
      sumOdd += psumo[i-1]
    }
    if (sumOdd === sumEven) {
      count++
    }
  }
  return count
}