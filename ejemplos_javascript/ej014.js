// = asignacion
// == comparacion (valor)
// === comparacion estricta (valor y tipo)

let a = 10;
let b = new Number(10);
let c = new Number(10);
let d = a;
let e = 10;
let f = b;

console.log(a == b); // true
console.log(a === b); // false

console.log(a == d); //true
console.log(a === d); //true

console.log(a == e); //true
console.log(a === e); //true

console.log(b == c); //false
console.log(b === c); //false

console.log(b == f); //true
console.log(b === f); //true

const alum1 = {
  nombre: "Juan",
  edad: 30,
};

const alum2 = {
  nombre: "Pablo",
  edad: 27,
};

const alum3 = {
  nombre: "Juan",
  edad: 30,
};

console.log(alum1 == alum2); //false
console.log(alum1 === alum2); //false

console.log(alum1 == alum3); //false
console.log(alum1 === alum3); //false
