// Given an array of integers A, find and return the product array of the same size where the ith element of the product array will be equal to the product of all the elements divided by the ith element of the array.

// Note: It is always possible to form the product array with integer (32 bit) values. Solve it without using the division operator.

function bruteForce(A) {
  const results = []
  const reversed = [...A].reverse()
  const pp = [A[0]]
  const sp = [reversed[0]]

  for (let i = 1; i < A.length; i++) {
    pp[i] = pp[i-1] * A[i]
  }

  for (let i = 1; i < reversed.length; i++) {
    sp[i] = sp[i-1] * reversed[i]
  }

  sp.reverse()

  for (let i = 0; i < A.length; i++) {
    if (i === 0) {
      results.push(sp[1])
    } else if (i === A.length-1) {
      results.push(pp[A.length-2])
    } else {
      const m1 = pp[i-1]
      const m2 = sp[i+1]
      const element = m1 * m2
      results.push(element)
    }
  }
  return results
}

const res1 = optimized([1, 2, 3, 4, 5])
console.log(res1)