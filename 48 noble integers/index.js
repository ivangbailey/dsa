// number of elements in array is lower than the element itself is equal itself

function nobleIntegers(A) {
  A.sort()
  let result = 0
  let smaller = 0
  if (arr[0] === 0) {
    result = 1
  }
  for (let i = 0; i < A.length; i++) {
    if (arr[i] !== arr[i-1]) {
      smaller = i
    }
    if (smaller === i) {
      result++
    }
  }
  return result
}

const res = nobleIntegers([1,5,-3,-8,2,-7,4,8])
console.log({res})