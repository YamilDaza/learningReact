import React, { Component } from 'react'

const StateFn = (props) => {
	return(
		<div>
			<p>Componente Hijo: { props.contadorHijo }</p>
		</div>
	)
}

export default class State extends Component {
	constructor(props){
		super(props);
		this.state = {
			contador: 0,
		};

		//Usamos setInterval para modificar el valor de state.contador pasando un tiempo determinado
		setInterval(() => {
			this.setState({
				contador:this.state.contador + 1,
			});
		},2000)
	}
	render() {
		return (
			<div>
				<h3>The State:</h3>
				<p>Componente padre: {this.state.contador}</p>
				<StateFn contadorHijo={this.state.contador}></StateFn>
			</div>
		)
	}
;}
