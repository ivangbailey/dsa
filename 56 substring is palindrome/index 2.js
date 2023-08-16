
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