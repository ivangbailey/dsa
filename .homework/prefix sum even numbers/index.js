

function evenNumbers(A, B) {
  let evens = 0
    const pEvens = []
    A.forEach((num, i) => {
        if (BigInt(num) % BigInt(2) === 0n) {
            evens++
        }
        pEvens.push(evens)
    })
    console.log({pEvens})
    let results = []
    for (let i = 0; i < B.length; i++) {
        const [l, r] = B[i]
        if (l === 0) {
            results.push(pEvens[r])
        } else {
            results.push(pEvens[r] - pEvens[l-1])
        }
    }
    return results
}

const res = evenNumbers([1, 2, 3,4,5],[[0,2], [2,4], [1, 4]])
console.log({res})