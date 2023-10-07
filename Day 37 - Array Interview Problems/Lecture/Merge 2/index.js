function solve(A, B) {
  A.push(B)
  A.sort((a, b) => a[0] - b[0])
  const result = []
  const s = A.map(a => a[0])
  const e = A.map(a => a[1])
  let l = s[0]
  let r = e[0]
  for (let i = 1; i < s.length; i++) {
    if (s[i] <= r) {
      r = Math.max(r, e[i])
    } else {
      result.push(l, r)
      l = s[i]
      r = e[i]
    }
  }
  result.push([l, r])
  return result
}