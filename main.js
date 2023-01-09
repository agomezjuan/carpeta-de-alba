const personas = ["Pedro", "María", "Francisco", "Susana", "Javier", "Alberto"]; // length

let i = 0;
while (i < personas.length) {
  console.log("Invitación para " + personas[i]);
  i++;
}

let l = personas.length;
while (l > 0) {
  console.log("Invitación para " + personas[l]);
  l--;
}

const myArray = [];
let j = 0;
while (j <= 5) {
  myArray.push(j);
  j++;
}
console.log(myArray);

const myArray2 = [];
let k = 5;
while (k >= 0) {
  myArray2.push(k);
  k--;
}
console.log(myArray2);
