import React, { useRef } from 'react';
import img01 from '../Task1/reyesIMG/rey_recesvinto.png';
import img02 from '../Task1/reyesIMG/rey_sisebuto.png';
import './css/style.css';

const AppTask2 = () => {
   const pesosMexicano = 23.16;
   const refCaja = useRef();

   function incrementar(event){
      event.target.innerHTML = Number(event.target.innerHTML)+1;
      event.target.style.backgroundColor = 'red';
   }

   const convertir = () => {
      refCaja.current.innerHTML = Number(refCaja.current.innerHTML) * pesosMexicano;
      console.log(refCaja.current.innerHTML)
   }

   const cambiarImg = (event) => {
      if(event.target.src.includes('recesvinto')){
         alert('recesvinto');
      }else{
         alert('NO ES recesvinto');
      }
   }

   const lectura = (e) => {
      refCaja.current.innerHTML = e.target.value;
   }

   return (
      <>
         <div className='caja' onClick={incrementar} ref={refCaja}>1</div>
         <button onClick={convertir}>Aceptar</button>
         <div><img onClick={cambiarImg} src={img01}/></div>
         <input onChange={lectura} className='campo' />
      </>
   );
}

export default AppTask2;
