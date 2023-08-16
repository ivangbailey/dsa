function solve(A){
  const xOf4 = A % 4 === 0
  const xOf100 = A % 100 === 0
  const xOf400 = A % 400 === 0
  const result = (xOf4 && !xOf100) || xOf400
  return Number(result)
}