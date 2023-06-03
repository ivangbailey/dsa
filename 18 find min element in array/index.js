

function findMin(A) {
  return A.reduce((previous, current) => {
    return Math.min(current, previous)
  }, -Infinity)
}

function findMax(A) {
  return A.reduce((previous, current) => {
    return Math.max(current, previous)
  }, -Infinity)
}