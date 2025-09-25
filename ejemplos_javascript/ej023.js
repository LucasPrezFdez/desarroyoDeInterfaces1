// Creacion de clases usando funciones
function Student(name) {
  (this.name = name), (this.notamedia = () => 9);
}

const manolin = new Student("Manolin");

// Creacion de clases usando class

class Student2 {
  constructor(name) {
    this.name = name;
    this.age = 20;
  }

  notamedia() {
    return 9;
  }

  notamedia2 = () => 9;
}
