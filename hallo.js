
  function validateHello(greetings) {
  const languages = ['hello', 'ciao','salut', 'hallo', 'hola', 'ahoj','czesc'];
  const greet = greetings.toLowerCase();
  return languages.some(word => greet.includes(word));
}
  