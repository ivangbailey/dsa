

function sqrt(n) {
  for (let i = 1; i < n.length; i++) {
    if (i * i === n) {
      return i
    }
  }
}