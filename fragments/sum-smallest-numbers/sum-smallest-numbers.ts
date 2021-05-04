function sumSmallestNumbers(numbers) {
  let result = 0;
  for (let i = 0; i < 2; i++) {

    const min = Math.min(...numbers)
    const indexOfMin = numbers.findIndex((eachNumber) => min === eachNumber)
    numbers.splice(indexOfMin, 1)
    result += min;
  }
  return result
}

