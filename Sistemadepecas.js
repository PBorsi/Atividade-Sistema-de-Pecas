//Se a peça possuir um peso superior a 100gramas, pode cadastrar.
//Dada a capacidade de cada caixa, caso a lista de peças seja superior a 10, imprima uma mensagem informando não ter capacidade suficiente.
//Caso a peça tenha um nome com quantidade inferior a 3 caracteres, informe uma mensagem de erro.

const { Console } = require("console")


let pesodepecas = 200
let listadepecas = ["roda","parafuso","rosca","porca","chave"]
let qntpecas = 15



console.log ("Sistema de Cadastro de pecas")

console.log("////////////////////////////////////////")

if (pesodepecas > 100) {
    console.log ("Proseguir com cadastro")    
} else {
    console.log ("Peso insuficiente")
    
}

console.log("////////////////////////////////////////")

if (qntpecas>10) {
    console.log ("Espaço insuficiente na caixa")    
} else {
    console.log ("Proseguir com cadastro")
}

console.log("////////////////////////////////////////")

for (let index = 0; index < listadepecas.length; index++) {
        const nomedapeca = listadepecas[index];
        if (nomedapeca.length < 3) { console.log ("Nome invalido, muito curto")
            
        } else {
            console.log ("Cadastro realizado com sucesso")
        }
}

console.log("////////////////////////////////////////")

console.log("Peças Cadastradas")