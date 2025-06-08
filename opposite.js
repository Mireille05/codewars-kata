function opposite(number) {
  if (number > 0){
    return -number;
  }
  else if(number < 0){
    return number * -1;
  }
    
  else {
    return 0;
  }

}
console.log(opposite(5));
console.log(opposite(-5));
console.log(opposite(-5.23));
