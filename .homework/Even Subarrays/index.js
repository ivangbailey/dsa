function solve(A) {
  function isEven(n) {
    return n % 2 === 0
  }
  if (!isEven(A.length)) {
    return 'NO'
  }
  if (!isEven(A[0]) || !isEven(A[A.length-1])) {
    return 'NO'
  }
  return 'YES'
}