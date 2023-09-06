class Animal{
    constructor(pCor, pTamanho, pPeso){
        this.cor = pCor
        this.tamanho = pTamanho
        this.peso = pPeso
    }
    correr(){
        console.log("correr")
        console.log("como")
        console.log("um")
    }

    dormir(){
        console.log("Dormir")
    }
}

class Cao extends Animal{
    constructor(pCor, pTamanho, pPeso, pOrelha){
        super(pCor, pTamanho, pPeso)
        this.tamanhoOrelha = pOrelha
    }
    latir(){
        console.log("Latir")
    }
    correr(){
        super.correr()
        console.log("Cão")
    }
}

class Passaro extends Animal{
    constructor(pCor, pTamanho, pPeso){
        super(pCor, pTamanho, pPeso)
    }
    correr(){
        super.correr()
        console.log("Pássaro")
    }
    voar(){
        console.log("Voar")
    }
}

class Papagaio extends Passaro {
    constructor(pCor, pTamanho, pPeso, pFalar){
      super(pCor, pTamanho, pPeso)
      this.sabeFalar = pFalar
    }
    falar(){
      console.log("falar")
    }
  }

const cao = new Cao()
const passaro = new Passaro()
const papagaio = new Papagaio("Vermelho", 20, 1, true)

//cao.correr()
/*
const cao = new Cao()
const passaro = new Passaro()
cao.correr()
cao.latir()
passaro.voar()*/