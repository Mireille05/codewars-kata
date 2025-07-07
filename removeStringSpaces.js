// function noSpace(str) {
//     return str.replace(/ /g, '');
// }

// console.log(noSpace("K U B W A Y O"))
// console.log(noSpace("E L Y S E"))
// console.log(noSpace("M I R E I L L E"))
// console.log(noSpace("t o d a y "))



// https://www.codewars.com/kata/57eae20f5500ad98e50002c5




function noSpace(x) {
  const y = x.split(" ").join("");
  return y;
}
console.log(noSpace("K U B W A Y O"));
