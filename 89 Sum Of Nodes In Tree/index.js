function solve(A) {
  if (A === null || A === undefined) {
    return 0
  }
  let result = 0
  // Preorder Traversal (VLR)
  result += A.value // Value operation
  let left = solve(A.left)
  let right = solve(A.right)
  return result + left + right
}