// function print(N) {
//   if (N === 0) {
//     return
//   }
//   print(N-1)
//   console.log(N)
// }

// print(10)

const solve = (A) => {
  let result = ''
  const re = (a) => {
      if (a < 1) {
          return
      }
      re(a-1)
      result = result + `${a} `
  }
  re(A)
  return result
}

const res1 = solve(77)
console.log({res1})