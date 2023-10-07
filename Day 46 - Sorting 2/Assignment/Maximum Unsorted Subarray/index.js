function solve(A) {
  let sorted = true
  let leftIndex = 0
  let rightIndex = A.length - 1

  for (let i = 1; i < A.length; i++) {
    const left = A[leftIndex]
    if (left > A[i]) {
      sorted = false
      break
    }
    leftIndex = i
  }

  if (sorted) {
    return [-1]
  }

  for (let i = A.length - 2; i >= 0; i--) {
    const right = A[rightIndex]
    if (right < A[i]) {
      break
    }
    rightIndex = i
  }

  let min = A[leftIndex]
  let max = A[leftIndex]
  for (let i = leftIndex+1; i <= rightIndex; i++) {
    min = Math.min(A[i], min)
    max = Math.max(A[i], max)
  }

  for (let i = 0; i < leftIndex; i++) {
    if (A[i] > min) {
      leftIndex = i
      break
    }
  }

  for (let i = A.length - 1; i > rightIndex; i--) {
    if (A[i] < max) {
      rightIndex = i
      break
    }
  }

  return [leftIndex, rightIndex]
}

const res1 = solve([1,2,3,5,6,13,15,16,17,13,13,15,17,17,17,17,17,19,19])
console.log({res1})