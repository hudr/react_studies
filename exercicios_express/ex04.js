

const express = require('express')
const server = express()

//Mapeando métodos para a mesma URL
server.route('/clientes')
    .get((req, res) => res.send('Lista de Clientes'))
    .post((req, res) => res.send('Novo cliente'))
    .put((req, res) => res.send('Altera cliente'))
    .delete((req, res) => res.send('Remove cliente'))


//escuta a porta e com arrow function traz algo
server.listen(3000, () => console.log('Executando...'))