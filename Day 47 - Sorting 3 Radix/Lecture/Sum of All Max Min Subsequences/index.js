function fastPower(a, b, m){
  if(b == 0n){
      return 1n;
  }

  let ans = this.fastpow(a, b/2n, m) % m;
  ans = (ans%m * ans%m) % m;

  if(b % 2n == 0n) {
      return ans;
  } else {
      return (ans * a%m) % m;
  }
}

function solve(A) {
  A.sort((a,b) => a-b)
  let ans = BigInt(0)
  for (let i = 0; i < A.length; i++) {
    ans = ans + arr[i] * (fastPower(2, A.length - 1 - i) - fastPower(2, i))
  }
  return ans
}