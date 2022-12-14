import React, { useState } from 'react';

const App = () => {
   // let nombre = 'Yamil';
   // let edad = 18;
   let [nombre, edad] = ['Yamil', 23];
   // console.log(nombre);
   // console.log(typeof(edad));
   
   //useState
   const [nombreCompleto, setNombreCompleto] = useState('React');
   
   const cambiar = () => {
      console.log(`Dentro de la funcion: ${nombreCompleto}`);
      setNombreCompleto('Yamil Daza');
   };
   console.log(`Fuera de la funcion: ${nombreCompleto}`);

   return (
      <div>
         <h1>class three - learning React - useState</h1>
         <h3>Me llamo {nombreCompleto}</h3>
         <button onClick={cambiar}>Cambiar nombre</button>
      </div>
   );
}

export default App;
