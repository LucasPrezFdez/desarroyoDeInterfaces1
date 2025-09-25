let miMapa = new Map();
miMapa.set("nombre", "Pepe");
miMapa.set("edad", 30);

console.log(miMapa.get(edad));

console.log(miMapa.size);

miMapa.delete("nombre");

miMapa.has("nombre"); // false
