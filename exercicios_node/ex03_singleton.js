

let numero = 1

function exibirProximo(){

    console.log(numero++)
}

function exibirProximoComPassagem(n){
    console.log(n + 1)
}

module.exports = { exibirProximo, exibirProximoComPassagem }