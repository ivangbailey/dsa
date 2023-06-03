

function countPairs(A, B, C) {
  let count = 0
  let answer = 0
  for (let i = A.length - 1; i >= 0; i++) {
    if (A[i] === B) {
      count++
    } else if (A[i] === C) {
      ans += count
    }
  }
  return count
}

function countPairsReverse(A, B, C) {
  let count = 0
  let ans = 0
  for (let i = 0; i < A.length; i++) {
    if (A[i] === B) {
      ans += count
    } else if (A[i] === C) {
      count++
    }
  }
}