// majority element is one where frequency is > A.length / 2

function majorityElement(A) {
  let el = A[0]
  let frequency = 0
  for (let i = 1; i < A.length; i++) {
    if (freq === 0) {
      el = A[i]
      freq = 1
    } else if (arr[i] === el) {
      freq++
    } else {
      freq--
    }
  }

  const candidate = element
  let count = 0
  for (let i = 0; i < A.length; i++) {
    if (candidate === A[i]) {
      count++
    }
  }
  if (count > A.length/2) {
    return candidate
  }
  // throw error or console log
  return -1
}