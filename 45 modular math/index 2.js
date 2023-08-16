

// integer addition over integer MAX VALUE
// ((a % p) + (b % p)) % p

// numbers with no constraint
// (a + b) % p

// multiplication
// ((a % p) * (b & p)) % p

// Properties:
// 1.
// (a % p) % p === a % p
// the subsequent modulos do nothing

// 2.
// (a % p * b) % p === (a * b) % p

// 3.
// % 3 === sum of all digits divisble by three
// % 9 === sum of all digits should be divisible by 9
// % 4 === last 2 digits divisible by 4
// % 8 === last 3 digits divisible by 8
// % 5 === last digit 5 or 0
// % 6 === divisible by 2 & 3
// % 10 === last digit is 0

// given a, n, p calculate (a^n) % p without built in functions

function solve(a, n, p) {
  const sum = A.reduce((prev, curr) => (sum + curr), 0)
  return sum % 3 === 0
}

const res = solve(3, 4, 7)
console.log({res})