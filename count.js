function countPositivesSumNegatives(input) {
  if (!input || input.length === 0) {
    return [];
  }

  let countPositives = 0;
  let sumNegatives = 0;

  for (let num of input) {
    if (num > 0) {
      countPositives++;
    } else if (num < 0) {
      sumNegatives += num;
    }
   
  }

  return [countPositives, sumNegatives];
}


console.log(countPositivesSumNegatives([1, 2, 3, -1, -2, 0]));  
console.log(countPositivesSumNegatives([-1, -2, -3]));          
console.log(countPositivesSumNegatives([0, 0, 0]));             
console.log(countPositivesSumNegatives([]));                    
console.log(countPositivesSumNegatives(null));               
