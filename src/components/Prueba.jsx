import React from 'react';

const saludo = (name) => `Nice to meet you ${name}`;

const Prueba = ({ children, gretting, acces, obj }) => {

   return (
      <>
         <p>{ saludo('Yamil') }</p>
      </>
   );
}

export default Prueba;
