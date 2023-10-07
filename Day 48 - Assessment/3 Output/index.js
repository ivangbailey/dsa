let count = 0
function solve(sr, sc, dr, dc) {
  if (sr > dr || sc > dc) {
    return
  }

  if (sr === dr && sc === dc) {
    count++
    return
  }

  solve(sr, sc+1, dr, dc)
  solve(sr+1, sc, dr, dc)
}

solve(0, 0, 2, 2)
console.log(count)