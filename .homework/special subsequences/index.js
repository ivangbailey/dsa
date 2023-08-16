// You have given a string A having Uppercase English letters.

// You have to find how many times subsequence "AG" is there in the given string.

// NOTE: Return the answer modulo 109 + 7 as the answer can be very large.

function count(A) {
  const gs = []
  let count = 0
  for (let i = A.length-1; i >= 0; i--) {
    if (A.charAt(i) === 'G') {
      count++
    }
    gs[i] = count
  }

  let result = BigInt(0)
  for (let i = 0; i < A.length; i++) {
    if (A.charAt(i) === 'A') {
      result += BigInt(gs[i])
    }
  }

  return Number(result % BigInt((10**9)+7))
}

function count2(A) {
  let count = 0
  let result = BigInt(0)
  for (let i = A.length-1; i >= 0; i--) {
    const char = A.charAt(i)
    if (char === 'G') {
      count++
    }
    if (char === 'A') {
      result += BigInt(count)
    }
  }

  return Number(result % BigInt((10**9)+7))
}

const res1 = count('AGAGG')
console.log({res1})