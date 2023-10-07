
function solve(A) {
  let result = 0
  let best = 0
  for (let i = 0; i < A.length; i++) {
      const count = A[i].filter(a => a === 1).length
      if (count > best) {
          result = i
          best = count
      }
  }
  return result
}

const res1 = solve([[0,0,1,1,1],[0,0,0,1,1],[0,0,0,1,1],[0,0,0,0,1],[0,0,0,1,1]])