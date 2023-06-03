
function prefixSum(A, B, C) {
  let prefix = [A[0]]
  for (let i = 1; i < A.length; i++) {
    let prev = prefix[prefix.length -1] + A[i]
    prefix.push(prev)
  }
  sum = prefix[C] - prefix[B]
  return sum
}