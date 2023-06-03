

function josephus(N) {
  let cp = 1
  while (cp * 2 <= N) {
    cp *= 2
  }
  kills = N - cp
  return ans (2*kills) + 1
}