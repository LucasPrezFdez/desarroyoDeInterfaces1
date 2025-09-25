function operaNumeros(a, b, operacion) {
  return operacion(a, b);
}
function suma(a, b) {
  return a + b;
}
function resta(a, b) {
  return a - b;
}
function multiplicacion(a, b) {
  return a * b;
}
function division(a, b) {
  return a / b;
}

console.log(operaNumeros(10, 2, suma));
console.log(operaNumeros(10, 2, resta));
console.log(operaNumeros(10, 2, multiplicacion));
console.log(operaNumeros(10, 2, division));
