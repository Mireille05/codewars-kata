function countSheeps(arrayOfSheep) {
  if (!arrayOfSheep) {
    return 0;
  }
  
  let count = 0;
  
  for (let i = 0; i < arrayOfSheep.length; i++) {
    
    if (arrayOfSheep[i] === true) {
      count++;
    }
  }
  
  return count;
}


function countSheepsFilter(arrayOfSheep) {
  return arrayOfSheep ? arrayOfSheep.filter(sheep => sheep === true).length : 0;
}


const sheepArray = [
  true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true
];

console.log(countSheeps(sheepArray));


console.log(countSheeps(null));
console.log(countSheeps(undefined));
console.log(countSheeps([true, false, null, undefined, true]));
console.log(countSheeps([])); 

console.log(countSheepsFilter(sheepArray));