function isPalindrome(str, s, e) {
  if (s === undefined) { s = 0}
  if (e === undefined) { e = A.length - 1}
  if (s > e) {
    return true
  }
  if (str[s] === str[e] && isPalindrome(str, s+1, e-1)) {
    return true
  }
  return false
}