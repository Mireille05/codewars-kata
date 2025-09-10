function findAverage(array) {
  let sum = 0;
  if (!array || array.length === 0) {
    return 0;
  } else {
    array.forEach((i) => {
      sum += i;
    });
    return sum / array.length;
  }
}
console.log(findAverage([1, 4, 6, 8, 9]));
console.log(findAverage([7, 41, 6, 8, 9]));
console.log(findAverage([16, 49, 6, 8, 96]));
console.log(findAverage([16, 49, 6.8, 8, 96, 90, 100]));
console.log(findAverage([13, 4, 6.8, 8, 9, 99, 100]));
