

const express = require('express')
const server = express()
const router = require('./ex05_routes')






server.use('/api', router)

//escuta a porta e com arrow function traz algo
server.listen(3000, () => console.log('Executando...'))