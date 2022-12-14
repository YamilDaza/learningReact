import React, { useState } from 'react';

const Sumador = () => {
   const [numero1, setNumero1] = useState('');
   const [numero2, setNumero2] = useState('');
   const [resultado, setResultado] = useState('');

   const sumar = () => {
      setResultado(Number(numero1) + Number(numero2));
   };

   const modificar1 = (e) => setNumero1(e.target.value);
   const modificar2 = (e) => setNumero2(e.target.value);


   return (
      <>
         <h1>Calcular la suma de 2 numeros random.</h1>
         <div>
            <input value={numero1} onChange={modificar1} type='number'/><span> + </span>
            <input value={numero2} onChange={modificar2}  type='number'/><span> = </span>
            <input value={resultado} type='number' readOnly/>
            <button onClick={sumar}>Sumar</button>
         </div>
      </>
   );
}

export default Sumador;
