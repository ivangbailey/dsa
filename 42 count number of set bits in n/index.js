
function checkBit(n, i) {
  return ((n & (1 << i)) === (1 << i))
}

function bruteForce(n) {
  let count = 0
  // for long use 64
  // for floats us 99
  for (let i = 0; i < 32; i++) {
    if (checkBit(n, i)) {
      count++
    }
  }
  return count
}

function nextSolution(n) {
  let count = 0
  while (n > 0) {
    if ((n & 1) === 1) {
      count++
    }
    n = n >> 1
  }
}