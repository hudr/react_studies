








function upper(text) {

    return text.toUpperCase()

}

function down(text) {
    
    return text.toLowerCase()
}

//Exportando essa chamada para outros arquivos/módulos [Função do Node]
module.exports = { upper, down }