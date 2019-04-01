









//Não tem caminho relativo pois já estão no core do Node.
const fs = require('fs')

//Ler diretório de forma síncrona
const files = fs.readdirSync(__dirname)

//Arrow function pra percorrer a lista e trazer os arquivos.
files.forEach(f => console.log(f))