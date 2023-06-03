
function sumOfTwo(A, t) {
  const map = {}
  for (let i = 0; i < A.length; i++) {
    const current = A[i]
    const diff = t - current
    if (map[diff]) {
      return true
    }
    map[current] = true
  }
  return false
}

// O

function checkPairsSlow(A, K) {
  for (let i = 0; i < A.length; i++) {
    for (let j = 0; j < A.length; j++) {
      if ((i !== j) && (arr[i] + arr[j] === K)) {
        return true
      }
    }
  }
  return false
}

// Analysis for optimized approach:
// Ignore everything before \:
// 0,0 \    0,1 0,2 0,3
// 1,0 1,1 \    1,2 1,3
// 2,0 2,1 2,2 \    2,3
// 3,0 3,1 3,2 3,3

// # iterations
// (N-1) + (N-2) + (N-3) + (N-4) ... + 2 + 1 + 0
// N(N-1)/2
// Time complexity: O(N)
// Space complexity: O(1)

function checkPairsOptimized(A, K) {
  for (let i = 0; i < A.length; i++) {
    for (let j = i + 1; j < A.length; j++) {
      if ((arr[i] + arr[j] === K)) {
        return true
      }
    }
  }
  return false
}