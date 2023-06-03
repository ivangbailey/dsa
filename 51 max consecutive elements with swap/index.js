

function countTriplets(A) {
  const N = A.length
  let count = 0
  for (let i = 1; i < n-1; i++) {
    let l = 0
    for (let j = 0; j < i; j++) {
      if (arr[i] > arr[j]) {
        l++
      }
    }
    let r = 0
    for (let j = N - 1; j > i; j--) {
      if (arr[i] < arr[j]) {
        r++
      }
    }
    count += (l*r)
  }
  return count
}