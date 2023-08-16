function solve(A) {
  const split = A.split(' ')
  for (let i = 0; i < Math.floor(split.length/2); i++) {
    const temp = split[i]
    split[i] = split[split.length - 1 - i]
    split[split.length - 1 - i] = temp
  }
  return split.join(' ')
}