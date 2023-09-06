/*class Carro{
    constructor(){
        this.modelo = "Civic"
        this.cor = "Preto"
    }
    frear(){
        console.log("Parar o carro")
    }
}

const carro = new Carro()
carro.frear()*/

class ContaBancaria {
    constructor(){
        this._numeroConta = 80
        this._saldo = 0
    }

    sacar(valorSaque){
        this._saldo = this._saldo - valorSaque
    }

    get saldo(){
        return this._saldo
    }
    set saldo(novoSaldo){
        if(novoSaldo > 0){
            this._numeroConta = novoSaldo
        }
    }
    get numeroConta(){
        return "Número: " + this._numeroConta
    }
    set numeroConta(numero){
        this._numeroConta = numero + 1
    }
}

const conta = new ContaBancaria()
//conta._numeroConta = 60
conta.saldo = 500
conta.sacar(50)
console.log(conta.saldo)