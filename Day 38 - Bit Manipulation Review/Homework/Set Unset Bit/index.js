function set(n, i) {
  return (n | (1 << i))
}

function unset(n, i) {
  return (n & (~(1 << i)))
}