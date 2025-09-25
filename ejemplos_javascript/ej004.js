function miFuncion() {}

miFuncion();

function imprimir(mensaje) {
  console.log(mensaje);
}

imprimir("Mensaje de prueba");

function suma(a, b) {
  return a + b;
}

let resultado = suma(5, 3);

console.log("El resultado de la suma es: " + resultado);

function saludar(usuario) {
  console.log("Hola, " + usuario.nombre + "!");
}

let usuarioNuevo = {
  nombre: "Luis",
  edad: 22,
};

saludar(usuarioNuevo);

saludar({
  nombre: "Luis",
  edad: 22,
});

function shoot(action) {
  action();
}

function missileShoot() {
  console.log("shuuuut! shuuuuut!");
}

function gunShoot() {
  console.log("Pam! Pam!");
}

shoot(missileShoot);

shoot(gunShoot);

function convertirAMayusculas(texto) {
  return texto.toUppercase();
}

function construirUsuario() {
  return {
    nombre: "Pedro",
    edad: 55,
    esEstudiante: false,
  };
}

function gemerarFuncion() {
  return function () {
    console.log("Funcion generada y ejecutada");
  };
}

function a() {
  console.log("Funcion a");
}

a.nombre = "Lucas";

console.log(a.nombre);
a();

let persona = {
  nombre: "Laura",
  edad: 20,
  esEstudiante: true,
  saludar: function () {
    console.log("Hola, soy " + this.nombre);
  },
};

console.log(persona.nombre);
persona.saludar();

function modificar(v) {
  v = 30;
}

let v = 5;

console.log(v);
modificar(v);
console.log(v);
