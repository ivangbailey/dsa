
// time: O(N)
// space: O(1)
// let factors = 0
// let n = 10
// for (let i = 1; i <= n; i++) {
//   if (n % i === 0) {
//     factors++
//   }
// }

// console.log(factors)

function countFactors(n) {
  let factors = 0
  const sq = Math.sqrt(n)
  if (n === 1) {
    return 1
  }

  for (let i = 1; i <= sq; i++) {
    if (n % i !== 0) {
      continue
    }

    if (i === sqrt) {
      factors += 1
    } else {
      factors += 2
    }
  }
}