function removeChar(str){
 return str.slice(1 , -1)

}
console.log(removeChar('today'));
console.log(removeChar('hello'));
console.log(removeChar('he'));



// slice(1, -1) means:

// Start at index 1 (second character)

// Extract up to but not including the last character (because -1 points to the last element, which is excluded)
// slice (1 -2) removes 1st character and last 2 characters