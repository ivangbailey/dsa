// Say you have an array, A, for which the ith element is the price of a given stock on day i.
// If you were only permitted to complete at most one transaction (ie, buy one and sell one share of the stock), design an algorithm to find the maximum profit.

// Return the maximum possible profit.


function solve(A) {
  let max = 0
  let result = 0
  for (let i = A.length-1; i >= 0; i--) {
    const current = A[i]
    max = Math.max(current, max)
    const diff = max - current
    result = Math.max(diff, result)
  }
  return result
}

const res1 = solve([1, 4, 5, 2, 4])
console.log({res1})