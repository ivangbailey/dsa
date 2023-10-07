const not = (num1, num2) => {
  console.log({[num1]: num1.toString(2)})
  console.log({[num2]: num2.toString(2)})
  console.log({[`~${num1}`]: parseInt(~num1)})
  console.log({[`~${num2}`]: parseInt(~num2)})
  console.log('\n')
}

not(5,6)
not(100, 50)