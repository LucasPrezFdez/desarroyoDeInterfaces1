let miInquilino = {
  nombre: "Carlos",
  edad: 28,
  esEstudieante: false,
  direccion: {
    calle: "Calle Falsa 123",
    ciudad: "Springfield",
    pais: "USA",
  },
};

console.log(miInquilino.nombre);
console.log(miInquilino.direccion.calle);
console.log(miInquilino["direccion"]["calle"]);

console.log(miInquilino["nombre"]);

let c = {
  nombre: "Ana",
};

let d = c;

d.nombre = "Manolo";

console.log(c.nombre);
console.log(d.nombre);


