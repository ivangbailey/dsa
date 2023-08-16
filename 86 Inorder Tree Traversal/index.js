function solve(A) {
  if (A === null || A === undefined) {
    return
  }
  solve(A.left)
  console.log(A) // run logic here
  solve(A.right)
}