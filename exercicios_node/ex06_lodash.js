










const _ = require('lodash')


const alunos = [{

    nome: 'Joao',
    nota: 7.6
}, {

    nome: 'Maria',
    nota: 8.6
}, {

    nome: 'Pedro',
    nota: 8.1
}]



const media = _.sumBy(alunos, 'nota') / alunos.length

const names = _.map(alunos, 'nome')

const max = _.max(_.map(alunos, 'nota'))

console.log('media alunos: ', media)

console.log('alunos nomes: ', names)

console.log('max number: ', max)