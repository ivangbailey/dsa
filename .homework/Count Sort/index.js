function solve(A) {
  const result = []
  const freq = Array(5001).fill(0)
  for (let i = 0; i < A.length; i++) {
    const current = A[i]
    freq[current] = freq[current] ? freq[current] + 1 : 1
  }

  freq.forEach((value, i) => {
    result.push(...Array(value).fill(i))
  })
  return result
}

const res1 = solve([3,4,3,4,3,4,5,6,2,3])
console.log({res1})