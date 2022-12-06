import React from 'react'
import './styles/App.css'

import Props from './components/Props';
import State from './components/State';
import Prueba from './components/Prueba'
import Renderizado from './components/Renderizado';
import ElementRender from './components/ElementRender';
import Eventos from './components/Eventos';

const App = () => {
	
	const cadena = 'Good Morning, Nice to meet you.';
	const acces = true;
	const arr = [2,4,10]
	const obj = {
		name:'Yamil',
		job:'Software Developer',
		age:23,
	}
	const funcion = (num) => num*num;
	const nombre = "Yamil Full Stack Developer";
	const caja = <h2>Hello world</h2>;

	return (
		<div className="App">
			<h1>Hello, welcome to learn ReactJS </h1>
			<hr/>

			{/* <div>{nombre}</div>
			<div>{caja}</div> */}
			
			{/* Props ......................... */}
			{/* <Props 
				string={cadena}
				numero={10+5}
				boolean={acces}
				arreglo={arr}
				obj={obj}
				elementReact={<i>Elemento react</i>}
				fn={funcion}
			>
				Propiedad de texto.
			</Props> */}

			{/* State ............................ */}
			{/* <State></State> */}

			{/* Renderizado condicional .......... */}
			{/* <Renderizado/> */}

			{/* Renderizado condicional de elementos .......... */}
			{/* <ElementRender/> */}

			{/* Eventos ............... */}
			{/* <Eventos/> */}

		</div>
	);
};

export default App
