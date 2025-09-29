class Habitante{

    constructor(nombre){
        this.nombre = nombre
    }

    static get contadorHabitantes(){
        if(Habitante.contadorPrivado){
            return Habitante.contadorPrivado
        }
        return 0;
    }

    static set contadorHabitantes(valor){
        Habitante.contadorPrivado = valor
    }
}