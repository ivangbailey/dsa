function swap(arr, i, j) {
  const temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}

// unstable sorting algorithm
function selectionSort(A) {
  for (let i = 0; i < A.length; i++) {
    let min = A[i]
    let minIndex = i
    for (let j = i + 1; j < A.length; j++) {
      if (A[j] < min) {
        min = A[j]
        minIndex = j
      }
    }
    swap(A, i, minIndex)
  }
}

function solve(A, B) {
  selectionSort(A)
  return A[B]
}

const res1 = solve([4, 7, 8, 2], 2)
console.log({res1})