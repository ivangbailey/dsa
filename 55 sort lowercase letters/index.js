
function sort(A) {
  const freq = Array(26).fill(0)
  for (let i = 0; i < A.length; i++) {
    let fi = A.charCodeAt(i) - 'a'.charCodeAt(0)
    freq[fi] += 1
  }
  const result = []
  for (let i = 0; i < freq.length; i++) {
    for (let j = 0; j < freq[i]; j++) {
      const ch = String.fromCharCode(i + 'a'.charCodeAt(0))
      result.push(ch)
    }
  }
  return result
}

console.log(sort('dddjjjaad'))