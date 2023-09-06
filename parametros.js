class Usuario {
    constructor(){
        this.email = ""
        this.senha = ""
        this.subtotal = ""
    }
    logar(){
        let emailBD = "lordbelle7@gmail.com"
        let senhaBD = "1234"

        if(senhaBD == this.senha){
            //console.log("Senha válida")
            return "Senha válida"
        } else {
            //console.log("Senha inválida")
            return "Senha inválida"
        }
    }
    calcularDesconto(cupom){
        let desconto = 0
        if(cupom == "DESC20"){
            desconto = 20
        } else if(cupom == "FESTA10"){
            desconto = 10
        }

        return this.subtotalCompra - desconto
    }
}

const usuario = new Usuario()
usuario.subtotalCompra = 279.90
usuario.calcularDesconto("DESC20")
/*usuario.email = "lordbelle7@gmail.com"
usuario.senha = "1234"
usuario.logar()*/