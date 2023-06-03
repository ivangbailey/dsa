
// function bubbleSortAsc(A) {
//   for (let i = 1; i < A.length; i++) {
//     for (let j = 0; j < A.length - 1; j++) {
//       if (A[i] > A[j+ 1]) {
//         swap(arr[j, arr[j + 1]])
//       }
//     }
//   }
// }

// function bubbleSortDesc(A) {
//   for (let i = 1; i < A.length; i++) {
//     for (let j = 0; j < A.length - 1; j++) {
//       if (A[i] < A[j+ 1]) {
//         swap(arr[j, arr[j + 1]])
//       }
//     }
//   }
// }

function ascComparator(A, B) {
  return A < B
}

function descComparator(A, B) {
  return A > B
}

function swap(A, i, j) {
  let temp = A[i]
  A[i] = A[j]
  A[j] = temp
}

function bubbleSort(A, comp) {
  for (let i = 1; i < A.length; i++) {
    for (let j = 0; j < A.length - 1; j++) {
      if (comp(A[i], A[j+1])) {
        swap(A, i, j + 1)
      }
    }
  }
  return A
}

const res = bubbleSort([1,8,2,5], descComparator)
console.log({res})