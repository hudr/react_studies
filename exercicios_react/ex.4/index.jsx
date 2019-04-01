






import React from 'react'
import ReactDOM from 'react-dom'

//Posso escolher o nome Primeiro porque é default no componente importado
//então escolho o nome que eu quiser que o React vai entender essa importação
//export default class
import Primeiro, { Segundo, Terceiro } from './component'

ReactDOM.render(
    <div>
        <Primeiro />
        <Segundo />
        <Terceiro />
    </div>,
    document.getElementById('app'))

