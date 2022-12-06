import React from 'react';

const Props = ({ children, porDefecto, string, numero, boolean, arreglo, obj,elementReact,fn }) => {
   return (
      <div>
         <p><strong>Props children: </strong> { children }</p>
			<p><strong>Props por defecto: </strong>{ porDefecto }</p>
			<p><strong>Props string: </strong>{ string }</p>
			<p><strong>Props number: </strong>{ numero }</p>
			{boolean ? <p><strong>Props boolean: </strong> Valor true booleano</p> : <p>Valor falso</p>}
			
			<strong>Props vectores - arreglos:</strong>
			<ul>
				{arreglo.map((num, index) => (
					<li key={index}>Item {index + 1} = {num}</li>
				))}
			</ul>
	
			<p><strong>Props objetos: </strong> Name: {obj.name}, Job: {obj.job}, Age: {obj.age}</p>
			<p><strong>Props funciones: </strong>{fn(3)}</p>
			<strong>Props elementos react:</strong> {elementReact}
      </div>
   );
}

Props.defaultProps = {
	porDefecto: 'Las props por defecto.'
}

export default Props;
