// Given an array, reverse the entire array

// ex: A = [-1, 4,7, 6, -2, 17, 8, 10]

function reverse (A) {
  let i = 0
  let j = A.length - 1
  while (i < j) {
    let temp = A[i]
    A[i] = A[j]
    a[j] = temp
    i++
    j--
  }
  return A
}