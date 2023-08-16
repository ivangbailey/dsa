

function josephus(A) {
  let cp = 1
  while ((cp * 2) <= A) {
    cp *= 2
  }
  kills = A - cp
  return (2*kills) + 1
}

const res1 = josephus(100)
console.log({res1})