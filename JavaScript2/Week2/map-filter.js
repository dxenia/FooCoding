'use strict';

function doubleOddNumbers(numbers) {
  const filterDoubleOddNumbers = numbers.filter((x) => x % 2 === 1).map(x => x * 2);
  return filterDoubleOddNumbers;
}

const myNumbers = [1, 2, 3, 4];
console.log(doubleOddNumbers(myNumbers));