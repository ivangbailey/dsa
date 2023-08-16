function solve(A) {
  let result = BigInt(0)
  const vowels = new Set(['a', 'e', 'i', 'o', 'u'])

  for (let i = 0; i < A.length; i++) {
    const char = A.charAt(i).toLowerCase()
    if (vowels.has(char)) {
      const remainingChars = A.length - i
      result += BigInt(remainingChars)
    }
  }

  return Number(result % BigInt(10003))
}

const res1 = solve('ABEC')
console.log({res1})
