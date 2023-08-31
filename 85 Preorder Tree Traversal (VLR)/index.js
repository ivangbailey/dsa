function solve(A) {
  if (A === null || A === undefined) {
    return
  }
  console.log(A) // logic on this line
  solve(A.left)
  solve(A.right)
}