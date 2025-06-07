function sumTwoSmallestNumbers(numbers) {  
  numbers=numbers.sort((a, b)=> a - b);
  return numbers[0] + numbers [1];
}

console.log(sumTwoSmallestNumbers([3, 7, 8]));
console.log(sumTwoSmallestNumbers([1, 4, 5, 7, 8]));






// https://www.codewars.com/kata/558fc85d8fd1938afb000014