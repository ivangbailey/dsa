// sort solution
function solve(A) {
  A = A.filter((a) => a >= 1)
  A.sort((a, b) => a-b)
  for (let i = 0; i < A.length; i++) {
    if (A[i] !== i + 1) {
      return i + 1
    }
  }
  return A[A.length - 1] + 1
}

// MEX solution
function solveMex(A) {
  for (let i = 0; i < A.length; i++) {
    if (A[i] >= 1 && A[i] < A.length) {
      const temp = A[A[i]]
      A[i] = temp
      A[temp] = i
    }
  }
  console.log(A)
}

const res2 = solveMex([3, -1, 0, 2])
console.log(res2)


const res1 = solve([0, -1, 2, 3])
console.log({ res1 })