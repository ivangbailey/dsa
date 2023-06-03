function findMin(A) {
  return A.reduce((previous, current) => {
    return Math.min(current, previous)
  }, -Infinity)
}

function findMax(A) {
  return A.reduce((previous, current) => {
    return Math.max(current, previous)
  }, -Infinity)
}

const findShortestSubarray(A) {
  const min = findMin(A)
  const max = findMax(A)
  if (max === min) {
    return 1
  }

  let iMin = -1
  let iMax = -1

  for (let i = A.length-1; i >= 0; i--) {
    if (A[i] === min) {
      iMin = i
      if (iMax !== -1) {
        ans = Math.min(ans, iMax-iMin+1)
      }
    } else if (A[i] === max) {
      iMax = i
      if (iMin !== -1) {
        ans = Math.min(ans, iMax-iMin+1)
      }
    }
  }
  return ans

}