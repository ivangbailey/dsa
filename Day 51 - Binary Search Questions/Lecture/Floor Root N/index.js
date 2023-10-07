function solve(A) {
  // Base cases
  if (A == 0 || A == 1)
  return A;

  let i = 1;
  let result = 1;

  while (result <= A) {
    i++;
    result = i * i;
  }
  return i - 1;
}

// function solve(A) {
//   let start = 0
//   let end = A
//   while (start <= end) {
//     let mid = (start + end)
//     if (mid * mid <= A) {
//       start = mid + 1
//     } else {
//       end = mid - 1
//     }
//   }
//   return end
// }

const res1 = solve(530751374)
console.log({ res1 })