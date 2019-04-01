

const express = require('express')
const server = express()



//define endereço e requisição
server.get('/', function(req, res) {

    res.send('<h1>Index!</h1>')
})

//todos os tipos de requisição
server.all('/teste', function(req, res) {

    res.send('<h1>Teste!</h1>')
})

//Expressão regular | se tiver as 3 letras contidas sempre retorna isso / mas sem ser letra grande
server.get(/api/, function(req, res) {

    res.send('<h1>API!</h1>')
})

//escuta a porta e com arrow function traz algo
server.listen(3000, () => console.log('Executando...'))