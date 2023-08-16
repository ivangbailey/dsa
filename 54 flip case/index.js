function flipCase(A) {
  const split = A.split('')
  const diff = 'a'.charCodeAt(0) - 'A'.charCodeAt(0)
  for (let i = 0; i < split.length; i++) {
    if (split[i].charCodeAt(0) >= 'a'.charCodeAt(0) && split[i].charCodeAt(0) <= 'z'.charCodeAt(0)) {
      split[i] = String.fromCharCode(split[i].charCodeAt(0) - diff)
    } else if (split[i].charCodeAt(0) >= 'A'.charCodeAt(0) && split[i].charCodeAt(0) <= 'Z'.charCodeAt(0)) {
      split[i] = String.fromCharCode(split[i].charCodeAt(0) + diff)
    }
  }
  return split.join('')
}

function _toLowerCase(A) {
  const diff = 'a'.charCodeAt(0) - 'A'.charCodeAt(0)
  for (let i = 0; i < A.length; i++) {
    if (A[i].charCodeAt(0) >= 'A'.charCodeAt(0) && A[i].charCodeAt(0) <= 'Z'.charCodeAt(0)) {
      A[i] = String.fromCharCode(A[i].charCodeAt(0) + diff)
    }
  }
  return A
}



function flipCaseBitWise(A) {
  for (let i = 0; i < A.length; i++) {
    A[i] = String.fromCharCode(A[i] ^ (1<<5))
  }
  return A
}

const res1 = flipCase('AaaBaa')