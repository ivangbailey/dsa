function solve(A, B) {
  let left = 0
  let right = 0
  let firstOccurance = -1
  let lastOccurance = -1

  while (left <= right) {
    let mid = Math.floor((left + right)/2)
    if (A[mid] === k) {
      firstOccurance = mid
      right = mid -1
    } else if (arr[mid] > k) {
      left = mid + 1
    } else {
      right = mid - 1
    }
  }

  while (left <= right) {
    let mid = Math.floor((left + right)/2)
    if (A[mid] === k) {
      lastOccurance = mid
      left = mid - 1
    } else if (arr[mid] > k) {
      right = mid + 1
    } else {
      left = mid - 1
    }
  }

  return [firstOccurance, lastOccurance]
}