const readLine = require("readline");

const configuracion = {
  input: process.stdin,
  output: process.stdout,
};

const rl = readLine.createInterface(configuracion);

function trabajarConElNumero(num) {
  num = parseInt(num);
  console.log("el numero que has escrito es: " + num);
  rl.close();
}

rl.question("dame un numero: ", trabajarConElNumero);
