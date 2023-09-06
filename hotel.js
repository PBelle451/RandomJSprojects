function verificarDisponibilidade(q,o){
    let res = q - o 
    console.log("Disponíveis: " + res)
}

/*
let quartos = 20
let ocupados = 10
verificarDisponibilidade(quartos,ocupados)

const hotel = {
    quartos: 20,
    ocupados: 10,
    verificarDisponibilidade: function(){
        let res = this.quartos - this.ocupados
        return "Disponíveis: " + res
    }
}
*/

/*
const hotel = new Object()
hotel.quartos = 20
hotel.ocupados = 10
hotel.verificarDisponibilidade = function(){
    let res = this.quartos - this.ocupados
    return "Disponíveis: " + res
}
console.log(hotel.quartos)
hotel.verificarDisponibilidade()
*/

class Hotel {
    constructor(){
        this.quartos = 20
        this.ocupados = 10
    }
}

const hotel = new Hotel()