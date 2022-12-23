import React from 'react';
import './rey.css';

const Rey = ( { data, set} ) => {
   const { nombre, color, precio, img } = data;
   
   function comprarRey(precio){
      set((e) => e + precio);
      document.querySelector('.contenedor-rey').remove();
   }
   
   
   return (
      <>
         <div className='contenedor-rey' style={{backgroundColor:color}}>
            <h1>Rey Godo</h1>
            <img src={img} alt={`Rey_${nombre}`}/>
            <h3>Nombre: {nombre}</h3>
            <p>Precio: ${precio}</p>
            <button onClick={() => comprarRey(precio)}>Comprar</button>
         </div>
      </>
   );
}

export default Rey;
