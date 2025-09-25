function myFunction() {
  console.log(arguments);
}

myFunction(2, 4, 5);

function sumar(...n) {
  let total = 0;

  for (let i = 0; i < n.length; i++) {
    total += n[i];
  }
  return total;
}

function sumar2(...n) {
  return n.reduce((a, b) => a + b);
  // return sum(n)  FUNCION PROPIA DEL LENGUAJE JS
}

console.log(sumar(5, 2, -3));
