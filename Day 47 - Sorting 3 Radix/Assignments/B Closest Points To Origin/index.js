function solve(A, B) {
  function euclideanDistance(point) {
    const [x1, y1] = [0, 0]
    const [x2, y2] = point

    return Math.hypot(x2, x1, y2, y1)
  }

  function comparator(a, b) {
    const euA = euclideanDistance(a)
    const euB = euclideanDistance(b)

    return euA - euB
  }
  A.sort(comparator)
  return A.slice(0, B)
}

const res1 = solve([ [1, 3], [-2, 2] ], 1)
const res2 = solve([ [2, -1], [1, -1] ], 1)

console.log({ res1, res2 })