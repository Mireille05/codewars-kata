function sumArray(arr) {
  let sum = 0;
  for (let num of arr) {
    sum = sum + num;
  }
  return sum;
}

console.log(sumArray([1, 5.2, 4, 0, -1]));
console.log(sumArray([-2.398]))
