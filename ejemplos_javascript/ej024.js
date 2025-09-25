const students = new Map();

students.set("david", 2);
students.set("orge", 5);

for (let clave of students.keys()) {
  console.log(clave);
}

for (let valor of students.values()) {
  console.log(valor);
}

for (let [key, valor] of students.entries()) {
  console.log(key, valor);
}
