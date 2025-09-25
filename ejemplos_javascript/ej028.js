const edificio = {
  altura: 10,
  plantas: 3,
  calle: "Hispanidad",
};

const edificioEnJson = JSON.stringify(edificio);

console.log(edificioEnJson);

const myForm = '{"nombre":"Juan", "edad":30}';
const myFormObject = JSON.parse(myForm);

console.log(myFormObject);
