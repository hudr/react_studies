






import React from 'react'
import ReactDOM from 'react-dom'
import Field from './field'

ReactDOM.render(

    //Definimos que a prop de label é 'Contador' e o (estado)initialValue começa em 10.
    <Field initialValue='Teste' />,
    document.getElementById('app')
)

