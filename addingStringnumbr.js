function calculate(str) {
  let expr = str.replace(/plus/g, '+').replace(/minus/g, '-');
  
  let result = eval(expr);

  return result.toString();
}
console.log(calculate("1plus2plus3plus4"));
