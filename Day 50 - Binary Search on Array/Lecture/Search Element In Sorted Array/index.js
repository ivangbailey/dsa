// Binary Search
// A = Array
// B = target

function solve(A, B) {
  let left = 0
  let right = A.length - 1
  while (left <= right) {
    // Right shift gives us a clean divide by 2
    const middle = Math.floor((right + left) / 2)
    if (A[middle] === B) {
      return middle
    } else if (A[middle] < B) {
      left = middle + 1
    } else {
      right = middle - 1
    }
  }

  return -1
}

const res1 = solve([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16], 13)
console.log(res1)