function solve(A, B, C, D, E) {
  // A = input matrix
  // B[i], C[i] are top left query coordinates
  // D[i], E[i] are bottom right query coordinates

  const mod = 1e9 + 7

  function generateMatrixPsum(array) {
    const result = []
    for (let i = 0; i < array.length; i++) {
      const subarray = array[i]
      result.push(Array(subarray.length).fill(0))
    }

    // populate first row
    result[0][0] = array[0][0]
    for (let i = 1; i < array[0].length; i++) {
      result[0][i] = (result[0][i-1] + array[0][i]) % mod
    }

    // populate first column
    for (let i = 1; i < array.length; i++) {
      result[i][0] = (result[i-1][0] + array[i][0]) % mod
    }

    // populate rest of psum
    // up 1 + left 1 - up left + current tile
    for (let i = 1; i < array.length; i++) {
      for (let j = 1; j < array[i].length; j++) {
        const up = result[i-1][j];
        const left = result[i][j-1]
        const upLeft = result[i-1][j-1]
        const current = array[i][j]
        result[i][j] = (up + left - upLeft + current) % mod
      }
    }

    return result
  }

  const queries = []
  const psum = generateMatrixPsum(A)
  console.log(psum)

  // handle queries
  for (let i = 0; i < B.length; i++) {
    // -1 because queries are 1 indexed
    const a1 = B[i]-1
    const b1 = C[i]-1
    const a2 = D[i]-1
    const b2 = E[i]-1
    let sum = psum[a2][b2]
    if(a1 > 0) {
      sum = (sum - psum[a1-1][b2]) % mod;
    }
    if(b1 > 0) {
        sum = (sum - psum[a2][b1 - 1]) % mod;
    }
    if(a1 > 0 && b1 > 0) {
        sum = (sum + psum[a1-1][b1-1]) % mod;
    }
    if(sum < 0) {
        sum = sum + mod;
    }
    queries.push(sum)
  }

  return queries
}

const res1 = solve([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
],
[1, 2],
[1, 2],
[2, 3],
[2, 3])
console.log({ res1 })