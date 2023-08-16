// majority element is one where frequency is > A.length / 2

function majorityElement(A) {
  let el = A[0]
  let frequency = 0
  for (let i = 1; i < A.length; i++) {
    if (frequency === 0) {
      el = A[i]
      frequency = 1
    } else if (A[i] === el) {
      frequency++
    } else {
      frequency--
    }
  }

  const candidate = el
  let count = 0
  for (let i = 0; i < A.length; i++) {
    if (candidate === A[i]) {
      count++
    }
    if (count > Math.floor(A.length/2)) {
      return Number(candidate)
    }
  }
  // throw error or console log
  return -1
}
