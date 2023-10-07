// 5 -> 101
// 6 -> 111
// &
// 4 -> 100

const and = (num1, num2) => {
  console.log({[num1]: num1.toString(2)})
  console.log({[num2]: num2.toString(2)})
  console.log({[`${num1} & ${num2}`]: parseInt(num1 & num2)})
  console.log('\n')
}

and(5,6)
and(100, 50)