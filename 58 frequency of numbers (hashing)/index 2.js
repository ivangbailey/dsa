function frequency(A) {
  const dict = {}
  A.forEach(val => {
    if (!dict[val]) {
      dict[val] = 1
    } else {
      dict[val]++
    }
  })

  
}
