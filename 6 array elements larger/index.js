// given n array of elements, count all elements having at least one element greater than itself

function countElementsWithGreater(A) {
  if (!A.length) return 0
  let max = -Infinity
  let count = 0
  for (let i = 0; i < A.length; i++) {
    const current = A[i]
    if (current === max) {
      count++
    } else {
      max = Math.max(current, max)
      count = 1
    }
  }
  const result = A.length - count
  return result
}