import React from 'react';

const reyes = [
   {
      nombre: 'A',
      reinado: 15,
      comida: 8,
   },
   {
      nombre: 'B',
      reinado: 12,
      comida: 4,
   },
   {
      nombre: 'C',
      reinado: 5,
      comida: 10,
   },
   {
      nombre: 'D',
      reinado: 8,
      comida: 19,
   },
];

const MainTask5 = () => {
   return (
      <div>
         <h1>Map - React</h1>
         {reyes.map((valor, index) => (
            <p key={index}>Rey: {valor.nombre}, come {valor.comida}. Su reinado duro {valor.reinado}</p>
         ))}
      </div>
   );
}

export default MainTask5;
