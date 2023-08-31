function solve(A) {
  if (A === null || A === undefined) {
    return
  }
  solve(A.left)
  solve(A.right)
  console.log(A) // logic here
}