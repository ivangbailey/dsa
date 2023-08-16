function solve(A) {
  if (!A.includes('1')) {
    return 0
  }
  let ones = 0
  let result = 0
  for (let i = 0; i < A.length; i++) {
    if (A[i] === 1) {
      ones++
    }
    let left = 0
    let right = 0
    if (A[i] === '0') {
      let j = i + 1
      while (A[j] === '1') {
        right++
        j++
      }
      j = i - 1
      while (A[j] === '1') {
        left++
        j--
      }
      result = Math.max(result, right + left + 1)
    }
  }

  if (ones === A.length) {
    return ones
  }

  return Math.max(ones, result)
}

const res1 = solve('00000011111111')
console.log({res1})

function maximum_one(s) {
  let cnt_one = 0;
  const n = s.length;

  for (let i = 0; i < n; i++) {
      if (s[i] === '1') {
          cnt_one++;
      }
  }

  const left = new Array(n).fill(0);
  const right = new Array(n).fill(0);

  if (s[0] === '1') {
      left[0] = 1;
  } else {
      left[0] = 0;
  }

  if (s[n - 1] === '1') {
      right[n - 1] = 1;
  } else {
      right[n - 1] = 0;
  }

  for (let i = 1; i < n; i++) {
      if (s[i] === '1') {
          left[i] = left[i - 1] + 1;
      } else {
          left[i] = 0;
      }
  }

  for (let i = n - 2; i >= 0; i--) {
      if (s[i] === '1') {
          right[i] = right[i + 1] + 1;
      } else {
          right[i] = 0;
      }
  }


  console.log({left})
  console.log({right})
  console.log({s})

  let cnt = 0;
  let max_cnt = 0;

  for (let i = 0; i < n; ++i) {
      max_cnt = Math.max(max_cnt, Math.max(right[i], left[i]));
  }

  for (let i = 1; i < n - 1; i++) {
      if (s[i] === '0') {
          const sum = left[i - 1] + right[i + 1];

          if (sum < cnt_one) {
              cnt = sum + 1;
          } else {
              cnt = sum;
          }

          max_cnt = Math.max(max_cnt, cnt);
          cnt = 0;
      }
  }

  return max_cnt;
}

const res2 = maximum_one('01110110011001')