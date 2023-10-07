
function mergeSortedSubarrays(A, B) {
  const result = []
  let i = 0
  let j = 0

  while (i !== A.length || j !== B.length) {
    if (i !== A.length && A[i] < B[j] || j === B.length) {
      result.push(A[i])
      i++
    } else {
      result.push(B[j])
      j++
    }
  }

  return result
}

function solve(A, l, r) {
  if (l === r) {
    return 0
  }

  mid = (l+r) / 2
  let ans = 0
  inversion(A, l, mid)
  ans += inversion(A, l, mid)
  ans += inversion(A, mid+1, r)
  ans += mergeSortedSubarrays(A, l, mid+1, r)
  return ans
}