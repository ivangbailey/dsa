function solve(A) {
  const string = A.toString()
  const cache = new Set()
  let start = 0
  let end = 1
  while (start < string.length) {
    let sub = string.substring(start, end).split('').map(n => Number(n))
    let product = 1
    for (let i = 0; i < sub.length; i++) {
      product *= sub[i]
    }
    if (cache.has(product)) {
      return 0
    }
    cache.add(product)
    end++
    if (end > string.length) {
      start++
      end = start + 1
    }
  }
  return 1
}

const res1 = solve(236)
console.log({res1})