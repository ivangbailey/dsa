const leftShift = (num1, num2) => {
  console.log({[num1]: num1.toString(2)})
  console.log({[num2]: num2.toString(2)})
  console.log({[`${num1} << ${num2}`]: parseInt(num1 << num2)})
  console.log('\n')
}

leftShift(5,6)
leftShift(100, 50)