

function sumOfEvenIndexes(A, B) {
  let psum = [A[0]]
  let sum = BigInt(psum[0])
  for (let i = 1; i < A.length; i++) {
    if (i % 2 === 0) {
      sum += A[i]
    }
    psum.push(sum)
  }

  const results = []

  for (let i = 0; i < B.length; i++) {
    const [start, end] = B[i]
    if (start === 0) {
      results.push(psum[end])
    } else {
      results.push(psum[end] - psum[start-1])
    }
  }
  return results
}

function sumOfOddIndexes(A, B) {
  let psum = [BigInt(0)]
  let sum = psum[0]
  for (let i = 1; i < A.length; i++) {
    if (i % 2 === 1) {
      sum += A[i]
    }
    psum.push(sum)
  }

  const results = []

  for (let i = 0; i < B.length; i++) {
    const [start, end] = B[i]
    if (start === 0) {
      results.push(psum[end])
    } else {
      results.push(psum[end] - psum[start-1])
    }
  }
  return results
}