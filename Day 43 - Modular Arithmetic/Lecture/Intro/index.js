// Properties:

// (A + B) % M = (A % M + B % M) % M
const A = 3
const B = 4
const M = 5

console.log({ A, B, M })
console.log({ 'A%M': (A+B)%M })
console.log({ '(A%M+B%M)%M': ((A%M)+(B%M))%M })