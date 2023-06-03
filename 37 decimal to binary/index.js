
function decimalToBinary(A) {
  const bits = []
  let quotient = A
  while (quotient > 0) {
    quotient /= 2
    const remainder = (quotient % 1) !== 0
    quotient = Math.floor(quotient)
    let bit = remainder ? 1 : 0
    bits.push(bit)
  }
  return bits.reverse()
}

let res = decimalToBinary(2147000000).join('')
console.info({ res })