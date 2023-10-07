const solve = (A) => {
  const input = String(A)
  const recurse = (a, index) => {
    if (index < 0) {
      return 0
    }
    const value = Number(a[index])
    return value + recurse(a, index - 1)
  }
  const result = recurse(input, input.length - 1)
  return result
}

const res1 = solve(243)
console.log({res1})