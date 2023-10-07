function solve(A) {
  let result = 0
  function checkBit(n, i) {
    return ((n & (1 << i)) === (1 << i))
  }
  for (let i = 0; i < 32; i++) {
    let count = 0
    for (let j = 0; j < A.length; j++) {
      if (checkBit(A[j], i) === true) {
        count++
      }
    }

    if (count % 3 !== 0) {
      result = result + (2 ** i)
    }
  }
  return result
}