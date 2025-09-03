function abbrevName(name) {
  const words = name.split(" ");
  return `${words[0][0].toUpperCase()}.${words[1][0].toUpperCase()}`;
}

console.log(abbrevName("Sam Harris"));
console.log(abbrevName("patrick Kaneza"));
console.log(abbrevName("Kubwayo elyse mireille"));
