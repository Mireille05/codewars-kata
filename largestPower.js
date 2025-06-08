function largestPower(n){
  let k = 0
  while (Math.pow(3,k) < n ){
    k ++
  }
  return k-1
}
console.log(largestPower(5));
console.log(largestPower(27));
console.log(largestPower(25));

//https://www.codewars.com/kata/57be674b93687de78c0001d9