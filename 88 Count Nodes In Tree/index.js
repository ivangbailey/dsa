function solve(A) {
  if (A === undefined || A === null) {
    return 0
  }
  let result = 0
  // LVR (Inorder Traversal)
  const left = solve(A.left)
  result += 1 // the value for this node
  const right = solve(A.right)
  return result
}