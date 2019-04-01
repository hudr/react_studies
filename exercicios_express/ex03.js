

const express = require('express')
const server = express()

//Use para qualquer chamada

server.use('/api', function(req, res, next) {

    console.log('Inicio...')

    //pula pra proxima function com mesmo endereço
    next()

    console.log('Fim...')
})

server.use('/api', function(req, res) {

    console.log('Resposta...')
    res.send('<h1>API!</h1>')
})
//escuta a porta e com arrow function traz algo
server.listen(3000, () => console.log('Executando...'))