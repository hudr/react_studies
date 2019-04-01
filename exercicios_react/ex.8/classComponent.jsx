












import React, { Component } from 'react'

export default class ClassComponent extends Component {

    constructor(props) {

        //Não mudamos o estado das props pois são imutáveis.
        super(props)

        //Aqui nós mudamos o estado e por isso passamos initialValue, não altera
        //o elemento e sim 'atualiza' ele para um novo dado.
        this.state = { value: props.initialValue }
    }

    sum(delta) {

        //chamamos a função passando um número dentro dela e 'atualizamos' o estado do initialValue
        this.setState({ value: this.state.value + delta })
    }

    render() {

        //Nesse return onde tem {this.props.label} estamos mostrando que passaremos uma props estática.
        //Logo abaixo definimos que o H2 terá um valor ao qual iremos passar, nesse caso o initialValue
        return (
            <div>
                <h1>{this.props.label}</h1>
                <h2>{this.state.value}</h2>
                <button onClick={() => this.sum(-1)}>Dec</button>
                <button onClick={() => this.sum(1)}>Inc</button>
            </div>
        )
    }
}

//Apenas estudos, definindo propriedades default dentro do componente da minha classe
//So props can come from the parent, or can be set by the component itself.
//https://lucybain.com/blog/2016/react-state-vs-pros/
ClassComponent.defaultProps = {
    label: "Contador Legal",
    initialValue: 32
};