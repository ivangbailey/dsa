
// O(LOG N BASE 10)
function binaryToDecimal() {
  let answer = 0
  power = 1
  while (n > 0) {
    let r = n % 10
    n = n/10
    ans += (r*power)
    power *= 2
  }
  return ans
}