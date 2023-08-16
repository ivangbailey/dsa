function solve(A, B) {
  let total = 0;
  for (let i = 0; i < A.length; i++) {
    if (A[i] <= B) {
      total++
    }
  }

  if (total === A.length) {
    return 0
  }

  let bad = 0
  for (let i = 0; i < total; i++) {
    if (A[i] > B) {
      bad++
    }
  }
  let result = bad

  for (let i = total; i < A.length; i++) {
    const j = i - total
    if (A[j] > B) {
      bad--
    }
    if (A[i] > B) {
      bad++
    }
    result = Math.min(bad, result)
  }
  return result
}

const res1 = solve([1, 12, 10, 3, 14, 10, 5], 8)
console.log({res1})

const res2 = solve([5, 17, 100, 11], 20)
console.log({res2})

// const res3 = solve([31,98,58,86,36,31,3,22,4,17,51,33,56,7,91,17,59,66,54,67,55,41,58,24,100,1,98,68,21,33,27,67,20,66,20,100,36,89,20,15,13,26,11,29,99,36,39,49,74,77,54,66,30,21,14,18,83,72,10,22,53,83,60,9,68,56,9,21,77,44,45,61,97,82,35,16,38,95,55,11,46,77,25,3,44], 18)