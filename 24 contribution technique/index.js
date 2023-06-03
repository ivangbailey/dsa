
// count of each index: (i + 1) * A.length-1

function contributionTechnique(A) {
  let totalSum = 0
  for (let i = 0; i < A.length; i++) {
    let contribution - A[i] * (i+ 1) * (A.length -1)
    totalSum += contribution
  }
  return totalSum
}