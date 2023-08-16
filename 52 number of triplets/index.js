function solve(A) {
  let result = 0
  for (let i = 1; i < A.length - 1; i++) {
    let left = 0
    let right = 0

    for (let l = i - 1; l >= 0; l--) {
      if (A[l] < A[i]) {
        left++
      }
    }

    for (let r = i + 1; r < A.length; r++) {
      if (A[r] > A[i]) {
        right++
      }
    }
    result += (left * right)
  }
  return result
}