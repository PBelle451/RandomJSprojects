class Carro {
    constructor(){
        this.marca = "Honda",
        this.modelo = "Civic",
        this.cor = "Preto",
        this.placa = "PAA-3524"
    }
}

const carro = new Carro()
//carro.modelo = "City"
console.log(carro.modelo)

class Produto {
    constructor(){
        //roupas
        this.tamanho = "G",
        this.cor = "Branca",
        this.preco = "60.00"

        //Eletronicos
        this.altura = "50cm",
        this.largura = "30cm"
    }
}