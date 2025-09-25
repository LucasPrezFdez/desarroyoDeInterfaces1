function Alumno() {
  //atributo
  this.nombre = "Ana";
  this.edad = 22;
}

function Producto(n) {
  this.nombre = n;
  this.precio = 12.5;

  this.precioConIva = function () {
    return this.precio * 1.21;
  };
}

let miArroz = new Producto("Arroz brillante");
print(miArroz.nombre);
print(miArroz.precio);
print(miArroz.precioConIva);

let n = 22.1234; //NUMBER

console.log(n.toFixed(2));

Number.prototype.esPar = function () {
  return this % 2 === 0;
};
