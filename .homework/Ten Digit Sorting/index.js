function solve(A) {
  function getDigit(number) {
    const split = number.toString().split('').reverse()
    const result = split[1] || 0
    return Number(result)
  }
  const comparator = (a, b) => {
    const tenthDigitA = getDigit(a)
    const tenthDigitB = getDigit(b)

    if (tenthDigitA > tenthDigitB) {
      return 1
    }
    if (tenthDigitB > tenthDigitA) {
      return -1
    }
    if (a > b) {
      return -1
    }
    return 1
  }
  A.sort(comparator)
  return A
}

const res1 = solve([36,63,63,26,87,28,77,93,7])
console.log({res1})