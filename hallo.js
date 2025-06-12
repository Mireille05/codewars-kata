
  function validateHello(greetings) {
  const languages = ['hello', 'ciao','salut', 'hallo', 'hola', 'ahoj','czesc'];
  const greet = greetings.toLowerCase();
  return languages.some(word => greet.includes(word));
}
  console.log(validateHello('waguan'));
  console.log(validateHello('ciao'));
  console.log(validateHello('salut'));
  console.log(validateHello('ahoj'));
  