
// Given a number in arr[n]. calculat ar [] % p
// arr[i] represents one digit in the number
// [1, 0, 0, 0] = 1000

function arrayModulo(A, P) {
  let ans = BigInt(0)
  let power = BigInt(1)
  for (let i = A.length - 1; i >= 0; i--) {
    ans = (ans + (arr[i] * power)) % P
    power = (power * 10) % p
  }
  return ans
}