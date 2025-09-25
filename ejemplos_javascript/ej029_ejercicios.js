/*
    Crea un objeto que
    Atributos: cantidadAzucar, tipoCafe
    Metodos: hacerCafe()
    Nota: El cafe tarda unos 3 segugundo en hacerse
*/

let coffeeMachine = {
  suggarAmount: 5,
  coffeeType: "solo",
  do: function () {
    setTimeout(() => {
      console.log("Cafe servido:" + this.coffeeType);
    }, 3000);
  },
};

coffeeMachine.do();
