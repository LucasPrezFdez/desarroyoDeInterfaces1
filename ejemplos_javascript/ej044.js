//Funciones de orden superior

// map

let numbers = [2, 5, 8];
const newNumbers = numbers.map((x) => x * 2);
console.log(newNumbers);

// filter

numbers = [2, 8, 3];
const odd = numbers.filter((x) => x % 2 !== 0);
console.log(odd);

// reduce
numbers = [3, 4, 7, 2];

const sumas = numbers.reduce((acumulador, x) => acumulador + x, 0);

// forEach

numbers = [5, 7, 8];

numbers.forEach((x) => console.log(x));

// find

numbers = [4, 8, 101, 7, 200];
const elemento = numbers.find((x) => x > 100);
console.log(elemento);

// some

numbers = [4, 8, 100, 33];
const cumple = numbers.some((x) => x > 20);

console.log(cumple);

// every

numbers = [4, 8, 100, 33];
const cumplenTodos = numbers.every((x) => x > 20);

console.log(cumplenTodos);

// sort
numbers = [4, 2, 8];
numbers.sort();
console.log(numbers);

numbers.sort((a, b) => b - a);
console.log(numbers);

// concat
numbers = [3, 6];
const otherNumbers = [6, 7];
const concatenation = numbers.concat(otherNumbers);
console.log(concatenation);
console.log(...numbers, ...otherNumbers);

// slice
numbers = [5, 7, 3, 8, 2];
const subArray = numbers.slice(1, 3);
console.log(subArray);

// splice
numbers = [1, 2, 3, 4, 5];
numbers.splice(1, 3, "a");
console.log(numbers);

// flat
numbers = [
  [2, 5, 6],
  [3, 4],
];
const plano = numbers.flat(2);
console.log(plano);

// reverse
numbers = [1, 2, 3];
numbers.reverse();
console.log(numbers);

// includes
numbers = [4, 7, 3, 10, 7];
const saco10 = numbers.includes(10);
console.log(saco10);

// flatMap
numbers = [1, 2, 3];
const doubled = numbers.flatMap((x) => [x, x * 2]);
console.log(doubled);
