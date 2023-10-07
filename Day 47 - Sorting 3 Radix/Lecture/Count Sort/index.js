function solve(A) {
  const negs = {}
  const map = {}
  for (let i = 0; i < A.length; i++) {
    const value = Math.abs(A[i])
    if (A[i] < 0) {
      if (!negs[value]) negs[value] = 0
      negs[value] += 1
      continue
    } else {
      if (!map[A[i]]) map[A[i]] = 0
      map[A[i]] += 1
    }
  }

  const result = []
  const nkeys = Object.keys(negs).reverse()
  for (let key of nkeys) {
    const value = Number(key) * -1
    const amount = negs[key]
    for (let i = 0; i < amount; i++) {
      result.push(value)
    }
  }

  const keys = Object.keys(map)
  for (let key of keys) {
    const value = Number(key)
    const amount = map[key]
    for (let i = 0; i < amount; i++) {
      result.push(value)
    }
  }

  return result
}

const res1 = solve([1, 2, 1, 0, 1, -1, 2, 3, 5, 1, 0])
console.log({ res1 })