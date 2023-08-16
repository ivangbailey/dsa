function solve(A) {
  const isAlpha = (char) => {
    const code = char.charCodeAt(0)
    const isLowercase = code >= 'a'.charCodeAt(0) && code <= 'z'.charCodeAt(0)
    const isUppercase = code >= 'A'.charCodeAt(0) && code <= 'Z'.charCodeAt(0)
    const isNumber = code >= '0'.charCodeAt(0) && code <= '9'.charCodeAt(0)
    return isLowercase || isUppercase || isNumber
  }

  for (let i = 0; i < A.length; i++) {
    if (!isAlpha(A[i])) {
      return Number(false)
    }
  }
  return Number(true)
}