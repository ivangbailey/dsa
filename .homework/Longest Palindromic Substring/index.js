function solve(A) {
  let result = ''
  if (A.length === 1) {
    return a
  }
  outer: for (let i = 0; i < A.length; i++) {
    let current = A[i]
    inner_odd: for (let j = 1; i + j < A.length && i - j >= 0; j++) {
      const l = i - j
      const left = A[l]
      const r = i + j
      const right = A[r]
      current = left + current + right
      if (left === right && (r + 1 - l) > result.length) {
        result = current
      }
      if (left !== right) {
        break inner_odd
      }
    }
    if (A[i] === A[i+1]) {
      current = A[i] + A[i+1]
      if (current.length > result.length) {
        result = current
      }
      inner_even: for (let i = 1; i < A.length; i++) {
        current = A[i] + A[i+1]
        for (let j = 1; (i + j + 1) < A.length && (i - j) >= 0; i++) {
          const l = i - j
          const r = i + j + 1
          current = A[l] + current + A[r]
          if (A[l] === A[r] && (r - l) > result.length) {
            result = current
          }
          if (A[l] !== A[r]) {
            break inner_even
          }
        }
      }
    }
  }
  return result
}

const res1 = solve('bccbcbcacbab')
console.log({res1})