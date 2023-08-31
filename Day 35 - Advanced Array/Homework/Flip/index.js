function solve(A) {
  let a = A.split('')
  let lowestDistance = Infinity
  let bestLeft = 0
  let bestRight = 0
  let bestFlipped = 0

  let flipped = 0
  let left = 0
  let best = 0
  let count = 0
  for (let i = 0; i < a.length; i++) {
    if (count < 0) {
      flipped = 0
      count = 0
      left = i
    }

    if (A[i] === '0') {
      count++
      flipped++
    } else {
      count--
    }

    let distance = i - left
    if ((count > best && flipped > bestFlipped) || (count === best && distance < lowestDistance && flipped > bestFlipped)) {
      lowestDistance = distance
      bestFlipped = flipped
      bestLeft = left
      bestRight = i
      best = count
    }
  }

  if (best === 0) {
    return []
  }
  return [bestLeft+1, bestRight+1]
}

const res1 = solve('10110100010011100000000111111111010011100100000000')
console.log({res1})