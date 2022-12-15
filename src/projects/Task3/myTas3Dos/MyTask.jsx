import React, { useState } from 'react';

const styles = {
   btn:{
      padding: '1rem',
      cursor: 'pointer',
   },
}

const reyesGobos = [
   {
      nombre: 'Ataulfo',
      aficion: 'Comer toros sin pelar',
   },
   {
      nombre: 'Recesvinto',
      aficion: 'Leer a Hegel en arameo',
   },
   {
      nombre: 'Teodorico',
      aficion: 'La cria del escarabajo en almibar',
   },
]

const MyTask = () => {

   const [dato, setDato] = useState('');
   const [counter, setCounter] = useState(0);
   const mostrarRey = () => {
      setCounter(counter + 1);
      if(counter+1 === reyesGobos.length){
         setCounter(0)
      }
      setDato(<h2>La aficion principal de <span>{reyesGobos[counter].nombre}</span> es <p>{reyesGobos[counter].aficion}</p></h2>);
   };

   return (
      <div>
         <button onClick={mostrarRey} style={styles.btn}>SIGUIENTE</button>
         <div>{dato}</div>
      </div>
   );
}

export default MyTask;
