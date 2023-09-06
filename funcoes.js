function desligarTorneira(){
    console.log("desligar torneira")
}

function pedirCopoAgua(){
    console.log("Pegar copo d'agua")
}

function levantarSofa(){
    console.log("Levantar o sofa")
}

function irMercadoComprarArroz(dinheiro){
    return "arroz"
}

function calcularMedia(nota1, nota2){
    let totalNotas = nota1 + nota2
    let media = totalNotas / 2
    return media
}

let retorno = irMercadoComprarArroz(10)
console.log(retorno)
let media = calcularMedia(8, 6)
let novaMedia = media + 1 
console.log(media)
console.log(novaMedia)
levantarSofa()
pedirCopoAgua()
desligarTorneira()

