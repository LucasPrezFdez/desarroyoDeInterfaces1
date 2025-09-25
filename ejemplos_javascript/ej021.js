function sumar1(num1, num2) {
  return num1 + num2;
}

function meLlamo1() {
  return "Lucas";
}

let meLlamo2 = function () {
  return "Lucas";
};

// lambdas

let meLlamo3 = () => {
  return "Lucas";
};

let meLlamo4 = () => "Lucas";

let sumar2 = (num1, num2) => num1 + num2;

const data = [3, 4, 6, -5, 3];

let soloPositivos = (num) => num >= 0;

let dataPositives = data.filter(soloPositivos);

console.log(dataPositives);

function fullName(params) {}
