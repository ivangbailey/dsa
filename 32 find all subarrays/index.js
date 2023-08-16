
function solve(A, B) {
  let results = 0
  for (let i = 0; i < A.length; i++) {
    const sub = []
    let sum = 0
    for (let j = i; j < A.length; j++) {
      sub.push(A[j])
      sum += A[j]
      if (sub.length % 2 === 0 && sum < B) {
        results++
      }
      if (sub.length % 2 !== 0 && sum > B) {
        results++
      }
    }
  }
  return results
}

const res1 = solve([1, 2, 3])
console.log({res1})