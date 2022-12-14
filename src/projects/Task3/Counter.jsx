import React, { useState } from 'react';

const Counter = () => {
   const [counter, setCounter] = useState(0);

   const aumentar = () => setCounter(counter+1);
   const restablecer = () => setCounter(0);
   const disminuir = () => setCounter(counter-1);

   return (
      <>
         <h1>Uso del useState - ejemplo Counter</h1>
         <div>
            <h2>{counter}</h2>
            <button onClick={aumentar} >Aumentar</button>
            <button onClick={restablecer} >Restablecer</button>
            <button onClick={disminuir} >Disminuir</button>
         </div>
      </>
   );
}

export default Counter;
