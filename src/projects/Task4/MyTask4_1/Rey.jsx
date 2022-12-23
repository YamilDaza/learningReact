import React from 'react';

const Rey = ( props ) => {
   const {nombre, color, precio} = props.data;
   return (
      <>
         <div className='contenedor-rey'>
            <h2>nombre: {nombre}</h2>
            <img/>
            <p>Precio: ${precio}</p>
         </div>
      </>
   );
}

export default Rey;
