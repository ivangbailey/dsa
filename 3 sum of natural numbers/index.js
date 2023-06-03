
// time: O(n)
// space: O(1)
function sum1(n) {
  let total = 0
  for (let i = 0; i < n + 1; i++) {
    total += n
  }
  return total
}

// time: O(1)
// space: O(1)
function sum2(n) {
  return (n * (n+1)) /2
}

const total = sum2(100)
console.log(total)