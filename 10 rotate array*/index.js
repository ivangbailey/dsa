// Given N array elemnts, rotate the given array from last to first by k times

function reverse(A, si, ei) {
  while (si < ei) {
    const temp = A[si]
    A[si] = A[ei]
    A[ei] = temp
    si++
    ei--
  }
  return A
}

// Swap:
// K = 2
// Array: 1, 2, 3, 4, 5
// Expected: 4, 5, 1, 2, 3

// first rotate:
// A: 5, 4, 3, 2, 1

// Rotate 0 to k-1
// A: 4, 5, 3, 2, 1

// Rotate k to A.length - 1
// A: 4, 5, 1, 2, 3


function rotate(A, k) {
  k = k % A.length

  // reverse entire array
  reverse(A, 0, A.length-1)

  // reverse first k elements
  reverse(A, 0, k-1)

  // reverse length - k elements
  reverse(A, k, A.length-1)
}