// All items occur twice and are adjacent to eachother, except for one
// must be faster than O(N) - XOR each element will not work
function solve(A) {
  let l = 0
  let r = A.length - 1

  while (l <= r) {
    const mid = Math.floor((l + r) / 2)
    if (A[mid] !== A[mid-1] && A[mid] !== A[mid + 1]) {
      return A[mid]
    }
    let fo = mid
    if (A[mid - 1] === A[mid]) {
      fo += 1
    }
    if (fo % 2 === 0) {
      l = fo + 2
    } else {
      r = fo - 1
    }
  }
}

const res1 = solve([1, 1, 3, 3, 4, 4, 2, 5, 5])
console.log({ res1 })