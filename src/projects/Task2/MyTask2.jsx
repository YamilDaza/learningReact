import React, {useRef} from "react";
import img1 from '../Task1/reyesIMG/rey_ataulfo.png'
import img2 from '../Task1/reyesIMG/rey_ervigio.png'
import './css/tasks2.css'

const MyTask2 = () => {
   const imgRef = useRef();
   const cajaRef = useRef();
   const spanRef = useRef();

   const cambiarImg = () => {
      if(imgRef.current.src.includes('ataulfo')){
         imgRef.current.src = img2;
      }else{
         imgRef.current.src = img1;
      }
   }

   const textoParalelo = (e) => {
      cajaRef.current.innerHTML = e.target.value;
   }

   const incrementar = (e) => {
      e.target.innerHTML = Number(e.target.innerHTML) + 1;
      if(Number(e.target.innerHTML) > 7){
         e.target.style.backgroundColor = 'red';
      }
      if(Number(e.target.innerHTML) === 10){
         e.target.innerHTML = 0;
         e.target.style.backgroundColor = '';
      }
   }

   return(
      <>
         <div>
            <h1>Intercambio de img aprentando un boton</h1>
            <div>
               <img ref={imgRef} src={img1} alt='Reyes'/>
               <button onClick={cambiarImg}>Cambiar imagen</button>
            </div>
         </div>
         <div>
            <h3 onClick={incrementar} className="counter" ref={spanRef}>0</h3>
         </div>
         <div>
            <h2>Mostrando paralelamente texto de un input</h2>
            <div ref={cajaRef} className='caja' ></div>
            <input onChange={textoParalelo}/>
         </div>
      </>
   )
}
export default MyTask2;