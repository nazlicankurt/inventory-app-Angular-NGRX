function findOddAmount(numbers) {
  const amountOfKeys = {}
  numbers.forEach((element)=>{
      amountOfKeys[element] = amountOfKeys[element] ? amountOfKeys[element] + 1 : 1
  })
  return Object.keys(amountOfKeys).find((eachKey) => isOdd(amountOfKeys[eachKey]))
}

isOdd = (value) => value % 2 === 1;
