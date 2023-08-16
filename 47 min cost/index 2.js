
function minCost(A) {
  A.sort((a, b) => b-a)
  let cost = 0
  for (let i = 0; i < A.length; i++) {
    cost += (i+1) * A[i]
  }
  return cost
}