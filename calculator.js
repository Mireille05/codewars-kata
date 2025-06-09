
function calculator(a, b, op) {
  if (typeof a !== 'number' || typeof b !== 'number' || isNaN(a) || isNaN(b)) {
    return "unknown value";
  }
  switch (op) {
    case '+': return a + b;
    case '-': return a - b;
    case '*': return a * b;
    case '/': return  a / b;
    default: return "unknown value";
  }
}

console.log(calculator(1, 2, '+'));
console.log(calculator(1, 0, '/'));
console.log(calculator(1, 8, '*'));

