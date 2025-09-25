let arr = [1, 2, 3, 4, 5];

console.log(arr[0]);

console.log(arr.length);

let arr2 = [2, 7, 1];

function doblar(num) {
  return num * 2;
}

function cuadrado(num) {
  return num * num;
}

arr2.map(doblar); //[4,14,2]

arr2.map(function (num) {
  return num * num;
});

console.log(arr2);

arr2 = [2, 7, 1];

function esPar(num) {
  return num % 2 == 0;
}

let positivos = arr2.filter(esPar); // [2]

arr2 = [2, 7, 1];
arr2.join("::"); //'2::7::1'

"2,7,1".split(","); // [2,7,1]

let newArray = "2,7,1".split(",");

arr2 = [2, 7, 1];

arr2.push(10); //añade al final
console.log(arr2);

arr2 = [2, 7, 1];

let ultimoElemento = arr2.pop();

arr2 = [2, 7, 1];
arr2.unshift(20);

arr2 = [2, 7, 1];
let primerElemento = arr2.shift;

arr2 = [1, 2, 3, 4];
arr2.splice(1, 2);
console.log(arr2);

arr2 = [1, 2, 3, 4];
let nuevosDatos = arr2.slice(1, 3);
console.log(nuevosDatos);

//Ejercicio

let mongolo = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  function (num) {
    if (num >= 0) {
      console.log("Es positivo");
    } else {
      console.log("Es negativo");
    }
  },
  {
    nombre: "CocaCola",
    precio: 1.5,
    stock: 20,
  },
  false,
];

console.log(mongolo[0]);

mongolo[10](9);

mongolo[11].nombre;

mongolo.unshift(0);

mongolo.push(!mongolo[12]);

console.log(mongolo.length);

function isBoolean(elem) {
  return typeof elem === "boolean";
}

mongolo.filter(mongolo.filter(isBoolean).length);

arr2 = [2, 7, 1];

function sumar(a, b) {
  return a + b;
}

let valor = arr2.reduce(sumar);
console.log(valor);
