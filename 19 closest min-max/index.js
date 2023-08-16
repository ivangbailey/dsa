// function findMin(A) {
//   return A.reduce((previous, current) => {
//     return Math.min(current, previous)
//   }, -Infinity)
// }

// function findMax(A) {
//   return A.reduce((previous, current) => {
//     return Math.max(current, previous)
//   }, -Infinity)
// }

// const findShortestSubarray(A) {
//   const min = findMin(A)
//   const max = findMax(A)
//   if (max === min) {
//     return 1
//   }

//   let iMin = -1
//   let iMax = -1

//   for (let i = A.length-1; i >= 0; i--) {
//     if (A[i] === min) {
//       iMin = i
//       if (iMax !== -1) {
//         ans = Math.min(ans, iMax-iMin+1)
//       }
//     } else if (A[i] === max) {
//       iMax = i
//       if (iMin !== -1) {
//         ans = Math.min(ans, iMax-iMin+1)
//       }
//     }
//   }
//   return ans

// }



function solve(A) {
  const findMin = (A) => {
    let min = Infinity
    for (let i = 0; i < A.length; i++) {
      min = Math.min(min, A[i])
    }
    return min
  }

  const findMax = (A) => {
    let max = -Infinity
    for (let i = 0; i < A.length; i++) {
      max = Math.max(max, A[i])
    }
    return max
  }

  const min = findMin(A)
  const max = findMax(A)

  let result = Infinity
  let minIndex = null
  let maxIndex = null

  for (let i = 0; i < A.length; i++) {
    const current = A[i]

    if (current === min) {
      minIndex = i
      if (maxIndex !== null) {
        const diff = minIndex - maxIndex
        result = Math.min(result, diff + 1)
      }
    }

    if (current === max) {
      maxIndex = i
      if (minIndex !== null) {
        const diff = maxIndex - minIndex
        result = Math.min(result, diff + 1)
      }
    }
  }

  return result === Infinity ? -1 : result
}

const res1 = solve([1, 3, 2])
const res2 = solve([2, 6, 1, 6, 9])
console.log({res1, expected: 2})
console.log({res2, expected: 3})