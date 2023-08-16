function solve() {
  let size = 1
  for (let i = 1; i < 16; i++) {
    size *= 2
    console.log({day: i, size})
  }
  console.log('25%: ', size * .25)
}

const res1 = solve()