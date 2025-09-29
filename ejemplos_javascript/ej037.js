class Cuadrado{
    constructor(lado){
        this.a = lado
    }
    getArea(){ return this.lado*this.lado }
}

class Rectangulo extends Cuadrado{
    constructor(l1,l2) {
        super(l1)
        this.b = l2
    }

    get area() {
        return this.b*this.a
    }

    set area(elArea) {
        this.b=elArea/this.a
        this.a=elArea/this.b
    }

}

let miRect = new Rectangulo(2,5)
miRect.area = 5 // esto llama a set area
console.log(miRect.area); // esto llama a get area
