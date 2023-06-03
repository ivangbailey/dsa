
function subarraySum(A, s, e) {
  let sum = 0
  for (let i = s; i < e; i++) {
    sum += A[i]
    // print sum
  }

  return sum
}

function subarraySums(A, s, e) {
  let total = 0
  for (let i = s; i < e; i++) {
    let sum = 0
    for (let j = i; j < e; j++) {
      sum += A[j]
      // print sum
    }
    total += sum
  }
  return total
}