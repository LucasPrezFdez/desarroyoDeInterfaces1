function Producto(nombre, precio) {
  this.nombre = nombre;
  this.precio = precio;
}

function suma(producto1, producto2) {
  return producto1.precio + producto2.precio;
}

const platano = new Producto("platano", 10);
const manzana = new Producto("manzana", 5);

console.log(suma(platano, manzana));
