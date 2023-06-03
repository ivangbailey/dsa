

function sumOfEvenIndexes(A, B) {
  let psum = [A[0]]
  for (let i = 0; i < A.length; i++) {
    let sum = psum[i-1]
    if (i % === 2) {
      sum += A[i]
    }
    psum.push(sum)
  }

  for (let i = 1; i <= B.length; i++) {
    const [start, end] = B[i]
    if (start === 0) {
      // print psum[end]
    } else {
      // print psum[end] - psum[start-1]
    }
  }
}