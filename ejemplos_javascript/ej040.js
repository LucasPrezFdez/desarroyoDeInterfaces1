
// Operador de Coalescencia nula (??)
// Devuelve el valor del lado derecho si el valor del lado izquierdo es null o undefined
// util para establecer valores predeterminados

let name = "Lucas" // <--

let info = name ?? "Desconocido"

console.log(info);


// Operador logico OR (||)
// Devuelve el primer valor truthy entre 2 o mas operandos
// Si el primer operador el falsy entonces evalua el segundo operador

let name2 = "Lucas"
let info2 = name2 || "Desconocido"
console.log(info2);


// Operador logico AND (66)
// Devuelve el primer valor falsy entre 2 o mas operadores
// Evalua todal las condiciones solo si son truthy, si no hay falsy devuelve el ultimo valor

let r = true && 1 && "Hola"
console.log(r);


// Operador de encadenamiento opcional (?.)
let user = {
    name: "Juan",
    age:22,
    address: {
        street: "Brasil",
        number : 48
    }
}

let addressStreet = user.address.street
console.log(addressStreet);
