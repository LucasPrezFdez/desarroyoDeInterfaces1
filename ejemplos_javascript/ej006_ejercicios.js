function addSemicolonAtTheEnd(str) {
  return (str += " ;");
}

let msg = "Hola";
msg = addSemicolonAtTheEnd(msg);
console.log(msg);
