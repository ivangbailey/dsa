function solve(A) {
  const comparator = (a, b) => {
    let aStr = `${a}${b}`
    let bStr = `${b}${a}`
    return Number(aStr) > Number(bStr)
  }

  return A.sort(comparator).join('')
}