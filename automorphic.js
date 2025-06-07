function automorphic(n){

  return Math.pow(n ,2).toString().endsWith(n.toString()) ? "Automorphic" : "Not!!"
}
console.log(automorphic([1,4,8,99]));
console.log(automorphic([4,5,6]));








// https://www.codewars.com/kata/5a58d889880385c2f40000aa