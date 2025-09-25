let arr = [1, 2, 3, 4, 5, 5, 6, 7, 8, 8, 9, 10];

let setNumbers = new Set();

for (let i = 0; i < arr.length; i++) {
  setNumbers.add(arr[i]);
}

console.log(setNumbers.has(5));

setNumbers.delete(2);

setNumbers.forEach(function (value) {
  console.log(value);
});

let nuevoArray = [];

setNumbers.forEach(function (value) {
  nuevoArray.push(value);
});
