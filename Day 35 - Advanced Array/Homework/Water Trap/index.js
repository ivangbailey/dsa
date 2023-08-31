function solve(A) {
  let n = A.length
  let left = 0
  let right = n-1
  let res = 0
  let maxLeft = 0
  let maxRight = 0
  while(left <= right) {
    if (A[left] <= A[right]) {
      if (A[left] >= maxLeft) {
        maxLeft = A[left]
      } else {
        res += maxLeft - A[left]
      }
      left++
    } else {
      if (A[right] >= maxRight) {
        maxRight = A[right]
      } else {
        res += maxRight - A[right]
      }
      right--
    }
  }
  return res
}