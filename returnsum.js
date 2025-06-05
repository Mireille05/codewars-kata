function positiveSum(arr) {
 
let result = 0;

for (let index = 0; index < arr.length; index++) {
  const element = arr[index];
  if (element > 0) {
    result = result + element;
  }
}
return result;
}
console.log(positiveSum([1,4,-7,6]));
console.log(positiveSum([-2,-5,-7,1]));




  
  
  