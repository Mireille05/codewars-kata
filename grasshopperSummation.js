function summation(num) {
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    sum += i;
  }
  return sum;
}
console.log(summation(3));
console.log(summation(10));
console.log(summation(4));

// let scores = [80, 90, 70];

// for (let score of scores) {
//   score = score + 15;
//   console.log(score);
// }

// let colors = ["Red", "Green", "Blue"];

// for (const [index, color] of colors.entries()) {
//   console.log(`${color} is at index ${index}`);
// }

// let scores = [10, 20, 30];
// scores.message = "Hi";

// console.log("for...in:");
// for (let score in scores) {
//   console.log(score);
// }

// console.log("for...of:");
// for (let score of scores) {
//   console.log(score);
// }

// function findSmallestInt(args) {
//   return Math.min(...args);
// }

// console.log(findSmallestInt([34, 15, 88, 2]));
// console.log(findSmallestInt([34, -345, -1, 100]));

// git commit --amend --no-edit --date "2025-08-19 10:14:10"   to commit in past
