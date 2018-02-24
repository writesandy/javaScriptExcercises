"use strict";



/* declaring a value we won't change "const", naming the varaible "sentence" assigning the variable 
eslint Autofix on save = true 

console.log (typeof name, name);
console.log (typeof happy, happy);
happy = false;
console.log (typeof happy, happy);
console.log (typeof age, age);*/

const sandra = { 
  name: 'Sandra',
  age: 49,
  happy: true,
  hairColor: "red",  
}

const jeremy = {
  name: 'Jeremy',
  age: 27,
  happy: false,
  hairColor: "brown",
}

const rachel = {
  name: 'Rachel',
  age: 30,
  happy: true,
  hairColor: "brown-black",
}

const studentArray = [sandra, jeremy, rachel];

console.log(studentArray);

for(let i = 0; i < studentArray.length; i++) {
  console.log(studentArray [i]);
}

for (let i= 0; i < studentArray.length; i++) {
  console.log(`hello, ${studentArray[i].name}. I heard you are ${studentArray[i].age}. That sure is old! Why are you so ${studentArray [i].happy ? 'happy' : 'unhappy'}?`)
}

// studentArray [i].happy ? 'happy' : 'unhappy'

if (sandra.happy) {
  return 'happy';
} else { 
  return 'unhappy';
}