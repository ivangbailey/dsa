// AND & : both bits are 1, return 1
// OR |: either bit is 1, return 1
// XOR ^: bits are different, return 1
// NOT !: single number operator, returns 1 if bit is 0

// 010100
// 101101 XOR (^)
// ======
// 111001

// PROPERTIES
// AND:
// A & 1
// 1 if first bit of A is 0 (=== 0 if A is odd)
// A & 0 (=== 0 if A is even)
// A & A = A

// OR:
// A | 0 = A
// A | A = A

// XOR
// A ^ 0 = A
// A ^ A = 0

// commutative properties:
// A & B = B & A
// A | B = B | A
// A ^ B = B ^ A

// ASSOCIATEIVE PROPERTIES
// (A&B)&C = A&(B|C)
// (A|B)|C = (A|B)|C
// (A^B)^C = A^(B^C)

// SHIFTING
// LEFT SHIFT <<
// a << n = a * 2^n
// 1 << n = 2^n

// RIGHT SHIFT
// a >> n = a/(2^n)
