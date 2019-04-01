






import React from 'react'
import ReactDOM from 'react-dom'
import ClassComponent from './classComponent'

ReactDOM.render(

    //Definimos que a prop de label é 'Contador' e o (estado)initialValue começa em 10.
    <ClassComponent label='Contador' initialValue={10} />,
    document.getElementById('app')
)

