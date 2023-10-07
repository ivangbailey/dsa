function solve(A) {
  let l = 0
  let r = A.length - 1

  if (A.length === 1) {
    return A[0]
  }

  if (A[0] < A[1]) {
    return A[0]
  }

  if (A[r] < A[r - 1]) {
    return A[r]
  }

  while (l <= r) {
    const mid = Math.floor((left + right) / 2)
    if (A[mid] < A[mid-1] && A[mid] < A[mid+1]) {
      return A[mid]
    }
    if (A[mid] > A[mid - 1]) {
      r = mid - 1
    } else {
      l = mid + 1
    }
  }

  return -1
}