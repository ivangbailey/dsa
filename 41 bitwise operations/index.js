
// SET ITH IN A  NUMBER
// 45 =     101101
// 1 << 2 = 000100
// use OR
// set ith bit by n | (1 << i)

// TOGGLE ITH IN A NUMBER
// 45 =     101101
// 1 << 2 = 000100
// use XOR
// set ith bit by n ^ (1 << i)

// =================================

// CHECK IF ITH BIT IS SET
// 45 =     101101
// 1 << 2 = 000100
// use AND
// set ith bit by n & (1 << i)
// WAYS TO CHECK ITH BIT:
// 1. using AND
// OR || !== 0
// if (((n & (1 << i)) === (1 << i))) {   }
// 2. using OR
// if ((n | (1 << i)) === n) {   }
// 3. using XOR
// if (((n ^ (1 << i))) < n) {   }
// 4. using RIGHT SHIFT
// ((n >> i) & 1) === 1

// =================================

// UNSET ITH BIT
// Check if bit is set
// toggle if so
// else
// no change

function unsetIthBit(A, B) {
  let result = A
  const set = A & (1 << B)
  if (set) {
    result = A ^ (1 << B)
  }
  return result
}

function unsetIBits(A, B) {
  let result = A
  for (let i = 0; i < B-1; i++) {
    const set = result & (1 << i)
    if (set) {
      result = result ^ (1 << i)
    }
  }
  return result
}