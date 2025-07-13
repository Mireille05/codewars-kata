function splitPairs(str) {
  if (str.length % 2 !== 0) {
    str += "_"; // Append underscore if length is odd
  }
  let result = [];
  for (let i = 0; i < str.length; i += 2) {
    result.push(str.slice(i, i + 2));
  }
  return result;
}
console.log(splitPairs("abc"));
console.log(splitPairs("abcdef"));
console.log(splitPairs("ab"));
console.log(splitPairs("God is goood all the time"));

// i +=2 to iterate by 2 after each incrementation
//i += 2 moves the loop forward by two characters so you don't process the same characters twice.

//slice(i, i + 2) extracts the current pair of two characters starting at i.
