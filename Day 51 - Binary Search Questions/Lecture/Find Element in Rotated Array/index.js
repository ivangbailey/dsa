function solve(A, B) {
  let l = 0
  let r = A.length-1
  while (l <= r) {
    let mid = Math.floor((l+r)/2)
    let ans = -1
    if (A[mid] > A[mid-1] && A[mid] > A[mid+1]) {
      return mid
    }
    else if (A[0] < A[mid]) {
      ans = mid
      l = mid + 1
    }
    else {
      r = mid - 1
    }
  }
  return - 1
}

function solveGoogle(A, B) {
  let l = 0
  let r = A.length -1
  while (l <= r) {
    mid = Math.floor((l+r) /2)
    if (A[mid] === B) return mid
    if ( B < A[0]) {
      if (A[mid] >= A[0]) {
        l = mid + 1
      } else {
        if (A[mid] < B) {
          l = mid + 1
        } else {
          r = mid - 1
        }
      }
    } else {
      if (A[mid] < A[0]) {
        r = mid - 1
      } else {
        if (A[mid] < B) {
          l = mid + 1
        } else {
          r = mid - 1
        }
      }
    }
  }

  return -1
}