function solve(A, result) {
  if (A === null || A === undefined) {
    return
  }
  solve(A.left)
  result.push(A.data) // run logic here
  solve(A.right)
  return result
}