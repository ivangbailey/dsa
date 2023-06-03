

function sumWithDeleted(A, B) {

  const psume = []
  const psumo = []
  // create psum for evens, psum for odds
  let count = 0
  for (let i = 0; i < A.length; i++) {
    let sumEven =  psumo[A.length - 1] - psumo[i]
    if (i !=== 0) {
      sumEven += psume[i-1]
    }
    let sumOdd = psume[A.length-1] - psume[i]
    if (i !=== 0) {
      sumOdd += psumo[i-1]
    }
    if (sumOdd === sumEven) {
      count++
    }
  }
}