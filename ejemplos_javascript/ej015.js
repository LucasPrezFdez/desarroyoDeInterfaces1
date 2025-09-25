let items = new Set();

items.add(1);
items.add(5);
items.add(5);
items.add("hola");

console.log(items.size);

items.has(1); //true
items.has(3); //false

items.delete(5); //true

items.clear(); //vacia el set

//items.forEach
