import React, { useState } from 'react';
import Divisa from './Divisa';
import './styles.css'

const divisaOriginal = { peso:'euro', valor: 12.2}
const divisasAConvertir = [
   {
      peso: 'argentino',
      valor: 20.2, 
   },
   {
      peso: 'colombiano',
      valor: 17.5,
   },
   {
      peso: 'mexicano',
      valor: 34.2,
   },
   {
      peso: 'dolar',
      valor: 54.2
   }
]

const ConvertidorDivisas = () => {
   
   const [cantidad, setCantidad] = useState(0);
   const obtenerDato = (e) => setCantidad(e.target.value);
   const obtenerValor = (valor) => valor * cantidad;

   return (
      <>
         <h1>Convertidor de Divisas</h1>
         <div className='inputs'>
            <label htmlFor='euro'>{divisaOriginal.peso}</label>
            <input id='euro' type='Number' value={cantidad} onChange={obtenerDato}/>
            {
               divisasAConvertir.map(item => 
                  <Divisa key={item.peso} peso={item.peso} valor={obtenerValor(item.valor)}/>
               )
            }
         </div>
      </>
   );
}

export default ConvertidorDivisas;
