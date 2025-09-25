function fullName(name, surname) {
  return name + " " + surname;
}

let fullName2 = (name, surname) => `${name} ${surname}`;

console.log(fullName2("Lucas", "Perez"));

function calculator(a, b, operation) {
  if (operation === "suma") {
    return a + b;
  }
  if (operation === "resta") {
    return a - b;
  }
  return 0;
}

const calculator2 = (a, b, operation) => {
  if (operation === "suma") {
    return a + b;
  }
  if (operation === "resta") {
    return a - b;
  }
  return 0;
};

const operations = {
  suma: (a, b) => a + b,

  resta: (a, b) => a - b,

  division: (a, b) => (b > 0 ? a / b : "b tiene que ser mayor que 0"),
};

const calculator3 = (a, b, operation) => operations[operation](a, b) || 0;

function greets() {
  return "Hola !!";
}

const greets2 = () => "Hola !!";

function printGreets() {
  console.log("Hola !!");
}

const printGreets2 = () => console.log("Hola !!");

function personCreator(name, age) {
  return {
    name: name,
    age: age,
    gender: "male",
    state: "single",
  };
}

const personCreator2 = (name, age) => ({
  name: name,
  age: age,
  gender: "male",
  state: "single",
});
