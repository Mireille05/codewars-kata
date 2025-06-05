function squareSum(numbers){
  let sum = 0;
  for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    sum += numbers[index] * numbers[index];
  }

  return sum;

}
console.log(squareSum([1,3,4]));
console.log(squareSum([2,5,6]));

