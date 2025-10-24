let regex = /cebem/

let text = "Estamos en cebem s1"

let result = regex.test(text)
console.log(result);

regex = /cebem/
text = "Me gusta cebem"
result = text.match(regex)
console.log(result);

regex = /cebem/
text = "Me gusta cebem"
let newText = text.replace(regex, "el lol")
console.log(newText);

regex = /p.ta/
console.log(regex.test('pota'));

regex = /3\d5/
console.log(regex.test('305')); //true
console.log(regex.test('3a5')); //false


regex = /3\w5/
console.log(regex.test('305')); //true
console.log(regex.test('3M5')); //true
console.log(regex.test('3ñ5')); //false
console.log(regex.test('3#5')); //false

regex = /3\s5/
console.log(regex.test('3 5')); //true
console.log(regex.test('315')); //false

regex = /3a+5/

console.log(regex.test('3a5')); //true
console.log(regex.test('3aaaaaaaaaaaaa5')); //true
console.log(regex.test('3b5')); //false

regex = /3a*5/
console.log(regex.test('35')); //true
console.log(regex.test('3a5')); //true 
console.log(regex.test('3aaaaa5')); //true 
console.log(regex.test('3 5')); //false

regex = /3\.5/
console.log(regex.test('3.5')); //true
console.log(regex.test('3M5')); //false

regex = /^cebem/
console.log(regex.test('Me gusta cebem')); //false
console.log(regex.test('cebem me gusta')); //true

regex = /cebem$/

console.log(regex.test('Me gusta cebem')); //true
console.log(regex.test('cebem me gusta')); //false

regex = /naranj[ao]/
console.log(regex.test('naranja')) //true
console.log(regex.test('naranjo')) //true
console.log(regex.test('naranje')) //false

regex = /naranj[a-h]/
console.log(regex.test('naranja')) //true
console.log(regex.test('naranjb')) //true
console.log(regex.test('naranji')) //false

regex = /naranja|naranjo/
console.log(regex.test('naranja')) //true
console.log(regex.test('naranjo')) //true
console.log(regex.test('pera')) //false

regex = /perr?o/
console.log(regex.test('perro')) //true
console.log(regex.test('pero')) //true
console.log(regex.test('pera')) //false

regex = /soy\s{4}angel/
console.log(regex.test('soy    angel')) //true
console.log(regex.test('soy angel')) //false

regex = /soy\s{2,4}angel/
console.log(regex.test('soy angel')) //false
console.log(regex.test('soy  angel')) //true
console.log(regex.test('soy   angel')) //true
console.log(regex.test('soy    angel')) //true

regex = /me\sgusta\s(cebem)?/
console.log(regex.test('me gusta cebem')) //true
console.log(regex.test('me gusta ')) //true
console.log(regex.test('me gusta')) //false

regex = /<img\s+src\s*=\s*["'](.*)['"]\s*\//
texto = `ìmg src="http://www.google.es"`
const url = texto.match(regex)