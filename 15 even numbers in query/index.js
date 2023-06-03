function evensInQuery(A, B) {
  let evens = 0
  const pEvens = []
  A.forEach((num, i) => {
    if (num % 2 === 0) {
      evens++
    }
    pEvens[i] = evens
  })
  const q = [[]]
  let i = 0
  while (i < q.length) {
    i++
    const [l, r] = q[i]
    // if (l === 0) { arr[r] }
    //  else { log pEvens[r] - pEvens[l-1] }
  }
}