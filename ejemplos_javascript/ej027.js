// REST
// Spread
// Destructuring

let favouriteFilm = {
  title: "Origen",
  director: "Random man",
  year: 2008,
};

// guarda en 2 variables el titulo y el año, pintalos por pantalla

// let title = favouriteFilm.title;
// let year = favouriteFilm.year;

let { title, year } = favouriteFilm;

console.log(title + " " + year);

let films = ["Alien", "Matrix", "Harry Potter", "Avengers", "Avatar"];

let [a, b, ...resto] = films;

console.log(a + " " + b);

console.log(resto);

function favouritDirectors() {
  return ["Scott", "Cameron", "Spieldberg", "Nolan", "Tarantino"];
}

let [director1, , director3] = favouritDirectors();

console.log(director1 + " " + director3);

function favouritActor() {
  return {
    name: "Di Caprio",
    edad: 50,
    isSingle: true,
    money: 300000000,
  };
}

let { name: theName, edad } = favouritActor();

console.log(`Autor: ${theName} || Edad: ${edad}`);

const angelTeacher = {
  id: 40,
  name: "Angel",
  school: {
    name: "Cebem",
    address: "Hispanidad 33",
  },
};

let {
  name: nombre,
  school: { name: nombreInstituto },
} = angelTeacher;

console.log(
  `Nombre del profesor: ${nombre} || Instituto donde trabaja: ${nombreInstituto}`
);
