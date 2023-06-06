function print(N) {
  if (N === 0) {
    return
  }
  print(N-1)
  console.log(N)
}

print(10)