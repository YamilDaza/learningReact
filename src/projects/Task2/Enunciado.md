# Tarea 2 - Agregar funcionalidades:
   - Cuando hago click en la imagen cambia pero tambien vuelve a su estado original al hacer nuevamente click
   - El texto numerico es ciclico, es decir, puede aumentar hasta el 9, y en el 8 y 9 agregar un fondo rojo y al apretar nuevamente estando en valor 9 vuelve al 1.

# Tarea 3 - 
   - Se desarrolla con la actividad 1, donde tenemos 3 fotos con fondos y nombre, y al apretar click tener comportamiento de cambios.
   - Dato -> realizar este ejericio con e.target.parentNode, y para modificar un estilo desde un hijo a un padre es e.target.parentNode.style = estilo.

# Tips ->
   - Cuando apretamos la imagen y ejecutamos el e.target.src, nos devuelve el contenido de la img el nombre - la ruta, ahora podemos usar includes para saber cual es y asi cambiarlo -> e.target.src.includes('recesvinto')....
   - Cuando usamos useRef, tenemos que usar current.textContent o innerHTML, etc.

# Notas Use Ref:
   *EJEMPLO 1:*
   import React, { useRef } from 'react';
   import './style.css';

   export default function App() {
      const inputRef = useRef();

   const imprimirValor = () => {
      console.log(inputRef.current.value);
   };

   return (
      <div>
         <input type="text" placeholder="nombre" ref={inputRef} />
         <button onClick={imprimirValor}>mostrar</button>
      </div>
     );
   }

   *EJEMPLO 2:*
   import React, {useEffect, useRef} from "react";
   import "./style.css";

   export default function App() {

   const focusInputRef = useRef();

   useEffect(() => {
      focusInputRef.current.focus();
   },[])
   return (
      <div>
         <form>
            <div>
               <label htmlFor="user">Usuario</label>
               <input 
                  type="text"
                  id="user"
                  placeholder="User"
                  ref={focusInputRef}
               />
            </div>
            <div>
               <label htmlFor="pass">Constraseña</label>
               <input 
                  type="password"
                  id="pass"
                  placeholder="Pass"
               />
            </div>
         </form>
      </div>
   );
   }

