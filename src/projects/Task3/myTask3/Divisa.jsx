import React from 'react';

const Divisa = ({ peso, valor }) => {
   
   return (
      <div className='inputs'>
         <label>{peso}</label>
         <input value={valor} type='Number' readOnly/>
      </div>
   );
}

export default Divisa;
