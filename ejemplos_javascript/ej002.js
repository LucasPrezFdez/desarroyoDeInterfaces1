let name = "Lucas";
let age = 20;

console.log(typeof name);

let bestStudent = {
  name: "Lucas",
  age: 20,
  isStudent: true,
};

let avaregeGrades = [9.5, 8.0, 7.5];

console.log(avaregeGrades);

function greet() {
  console.log("Hello " + name);
}
greet();

let puntero = greet;

let saluda = function () {
  console.log("Hola, " + name);
};
