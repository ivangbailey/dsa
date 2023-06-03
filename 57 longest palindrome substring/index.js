
function isPalindrome(A, s, e) {
  while (s < e) {
    if (A[s] !== str[e]) {
      return false
    }
    s++
    e--
  }
  return true
}

function longestP(A) {
  let ans = 0
  for (let i = 0; i < A.length; i++) {
    for (let i = 0; i < j; i++) {
      const ss = A.substring(i, j)
      if (isPalindrome(ss, 0, ss.length - 1)) {
        ans = Math.max(ans, ss.length)
      }
    }
  }
  return ans
}

function expand(A, p1, p2) {
  while (A[p1] === A[p2]) {
    p1--
    p2++
  }
  return p2-p1-1
}

function solveFaster(A) {
  if (A.length <= 1) {
    return A.length
  }
  let ans = 0
  for (let i = 0; i < A.length; i++) {
    const ln = expand(A, i, i)
    ans = Math.max(ans, ln)
  }
  for (let i = 0; i < A.length; i++) {
    const ln = expand(A, i, i+1)
    ans = Math.max(ans, ln)
  }
  return ans
}